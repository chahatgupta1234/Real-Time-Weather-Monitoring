const WeatherSummary = require('../models/WeatherSummary'); // Assuming you have a model for storing summaries
const WeatherAlert = require('../models/WeatherAlert'); // Assuming you have a model for alerts

// Controller to fetch daily summaries from the database
exports.getDailySummaries = async (req, res) => {
  try {
    const summaries = await WeatherSummary.find(); // Fetch all daily summaries
    res.status(200).json(summaries);
  } catch (error) {
    console.error('Error fetching daily summaries:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to fetch active alerts from the database
exports.getAlerts = async (req, res) => {
  try {
    const alerts = await WeatherAlert.find(); // Fetch all active alerts
    res.status(200).json(alerts);
  } catch (error) {
    console.error('Error fetching alerts:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
