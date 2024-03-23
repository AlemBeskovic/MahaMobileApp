import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RatingInfoBox = ({ ratingField }) => (
  <View style={styles.infoBox}>
    <Text style={styles.vehicleDescription}>{ratingField.VehicleDescription}</Text>
    <Text>Overall Rating: {ratingField.OverallRating}</Text>
    {/* Add more rating fields as needed */}
  </View>
);

const VehicleRatings = ({ ratings }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Rating Information</Text>
    {ratings.map((ratingField, index) => (
      <RatingInfoBox key={index} ratingField={ratingField} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  infoBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  vehicleDescription: {
    fontWeight: 'bold',
  },
});

export default VehicleRatings;