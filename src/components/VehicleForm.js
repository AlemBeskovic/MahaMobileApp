// src/components/VehicleForm.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { YEARS, MAKES, MAKE_MODEL_MAPPING } from '../utilities/constants';
import { Picker } from '@react-native-picker/picker';


export default function VehicleForm({ fetchData }) {
  const [year, setYear] = React.useState('');
  const [make, setMake] = React.useState('');
  const [model, setModel] = React.useState('');
  const [models, setModels] = React.useState([]);

  React.useEffect(() => {
    if (make) {
      setModels(MAKE_MODEL_MAPPING[make] || []);
    }
  }, [make]);

  return (
    <View style={styles.formContainer}>
      <Picker selectedValue={year} onValueChange={(itemValue) => setYear(itemValue)}>
        {YEARS.map((year) => <Picker.Item label={year} value={year} key={year} />)}
      </Picker>
      <Picker selectedValue={make} onValueChange={(itemValue) => setMake(itemValue)}>
        {MAKES.map((make) => <Picker.Item label={make} value={make} key={make} />)}
      </Picker>
      <Picker selectedValue={model} onValueChange={(itemValue) => setModel(itemValue)} enabled={models.length > 0}>
        {models.map((model) => <Picker.Item label={model} value={model} key={model} />)}
      </Picker>
      <Button title="Fetch Data" onPress={() => fetchData(year, make, model)} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 20,
  },
});
