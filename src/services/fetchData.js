import axios from 'axios';
import { FETCH_DATA_ENDPOINT } from '@env';

export const fetchData = async (year, make, model) => {
  try {
    const response = await axios.get(`${FETCH_DATA_ENDPOINT}?year=${year}&make=${make}&model=${model}`);
    return response.data; // Return data for use in your component
  } catch (error) {
    console.error('Error fetching data', error);
    throw error; // Throw error to be handled by caller
  }
};
