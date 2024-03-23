
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import VehicleForm from '../components/VehicleForm';
import VehicleRatings from '../components/VehicleRatings';
import VehicleRecalls from '../components/VehicleRecalls';
import { fetchData } from '../services/fetchData'; // Assuming fetchData is exported from services

export default function VehicleFetcher() {
  const [data, setData] = useState({ recalls: [], ratings: [] });
  const [errorMessage, setErrorMessage] = useState('');
  const [hasFetchedData, setHasFetchedData] = useState(false);

  const handleFetchData = async (year, make, model) => {
    try {
      const response = await fetchData(year, make, model);
      setData({
        recalls: response.recalls,
        ratings: response.ratings,
      });
      setErrorMessage('');
      setHasFetchedData(true);
    } catch (error) {
      console.error('Error fetching data', error);
      setErrorMessage("Error fetching data. Please try again.");
      setHasFetchedData(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <VehicleForm fetchData={handleFetchData} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {hasFetchedData && (
        <View>
          <VehicleRatings ratings={data.ratings} />
          <VehicleRecalls recalls={data.recalls} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
