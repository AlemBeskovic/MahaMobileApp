import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecallInfoBox = ({ recallItem }) => (
  <View style={styles.infoBox}>
    <Text style={styles.componentTitle}>Component: {recallItem.Component}</Text>
    <Text>Summary: {recallItem.Summary}</Text>
    {/* Add more recall details as needed */}
  </View>
);

const VehicleRecalls = ({ recalls }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Recall Information</Text>
    {recalls.map((recall, index) => (
      <RecallInfoBox key={index} recallItem={recall} />
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
  componentTitle: {
    fontWeight: 'bold',
  },
});

export default VehicleRecalls;