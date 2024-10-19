const axios = require('axios');
const WeatherData = require('../models/WeatherData');

const fetchWeather = async (req, res) => {
  const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
  const apiKey = process.env.WEATHER_API_KEY;

  // Get user preference for temperature unit (C or F)
  const tempUnit = req.query.unit || 'C'; // Default to Celsius if not specified

  try {
    const weatherDataArray = await Promise.all(
      cities.map(async (city) => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          );
          const data = response.data;

          // Convert temperature from Kelvin to the user's preferred unit
          const tempK = data.main.temp;
          const feelsLikeK = data.main.feels_like;
          const minTempK = data.main.temp_min;
          const maxTempK = data.main.temp_max;

          const weatherData = {
            city: data.name,
            temp: tempUnit === 'F' ? (tempK - 273.15) * 9/5 + 32 : (tempK - 273.15).toFixed(2), // Convert to Celsius or Fahrenheit
            feels_like: tempUnit === 'F' ? (feelsLikeK - 273.15) * 9/5 + 32 : (feelsLikeK - 273.15).toFixed(2),
            minTemp: tempUnit === 'F' ? (minTempK - 273.15) * 9/5 + 32 : (minTempK - 273.15).toFixed(2),
            maxTemp: tempUnit === 'F' ? (maxTempK - 273.15) * 9/5 + 32 : (maxTempK - 273.15).toFixed(2),
            condition: data.weather && data.weather.length > 0 ? data.weather[0].main : null,
            timestamp: new Date(),
          };

          const newWeather = new WeatherData(weatherData);
          await newWeather.save();
          return newWeather; 
        } catch (error) {
          console.error(`Error fetching weather data for ${city}:`, error.message);
          return { city, error: 'Failed to fetch data' }; // Return error object for UI handling
        }
      })
    );

    res.status(200).json(weatherDataArray); // Send the weather data array back to the frontend
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Server error while fetching weather data' });
  }
};

module.exports = { fetchWeather };
