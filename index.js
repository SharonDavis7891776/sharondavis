// magic-utils.js

// Import dependencies
const axios = require('axios');
const lodash = require('lodash');

// Function to generate a random number within a specified range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to fetch data from a URL using Axios
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching data from ${url}: ${error.message}`);
  }
}

// Function to shuffle an array
function shuffleArray(array) {
  return lodash.shuffle(array);
}

module.exports = {
  generateRandomNumber,
  capitalizeFirstLetter,
  fetchData,
  shuffleArray
};
