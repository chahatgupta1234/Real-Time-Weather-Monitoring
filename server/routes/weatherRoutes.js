const express = require('express');
const { fetchWeather } = require('../controllers/weatherController.js'); // Import the fetchWeather function from the controller
const router = express.Router();

router.get('/weather', fetchWeather); // Define the GET route for fetching weather data

module.exports = router; // Export the router to use in server.js
