const axios = require('axios');

async function getPrediction(features) {
  try {
    const response = await axios.post('http://localhost:5000/predict', { features });
    console.log('Prediction:', response.data.prediction);
  } catch (error) {
    console.error('Error fetching prediction:', error);
  }
}

getPrediction([5]);  // Example input feature