import axios from 'axios';

// Замените BASE_URL на URL вашего API
const BASE_URL = 'https://your-api-url.com';

export const getSpread = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/spreads/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching spread:', error);
    throw error;
  }
};