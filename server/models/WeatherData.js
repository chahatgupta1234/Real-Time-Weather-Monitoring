const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: String,
  temp: Number,
  minTemp: Number,
  maxTemp: Number,
  condition: String,
  timestamp: Date,
});

module.exports = mongoose.model('WeatherData', weatherSchema);
