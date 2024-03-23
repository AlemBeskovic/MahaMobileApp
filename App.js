import React from 'react';
import VehicleFetcher from './src/screens/VehicleFetcher';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <VehicleFetcher />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 25 : 0,
  },
});
