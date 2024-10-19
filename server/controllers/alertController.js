// controllers/alertController.js
const WeatherData = require('../models/WeatherData');

const checkThresholds = async () => {
  try {
    const recentData = await WeatherData.find().sort({ timestamp: -1 }).limit(2); // Fetch last two records

    if (recentData.length < 2) {
      console.log('Not enough data to check thresholds.');
      return;
    }

    const tempThreshold = 35; // Threshold for triggering the alert
    const conditionThreshold = 'Rain'; // For example, alert on specific condition

    const lastTemp = parseFloat(recentData[0].temp);
    const prevTemp = parseFloat(recentData[1].temp);

    if (lastTemp > tempThreshold && prevTemp > tempThreshold) {
      console.log(`Alert: Temperature has exceeded ${tempThreshold}°C for two consecutive updates!`);
      // Here you could also send email or any other alert mechanism
    }

    // Check for a weather condition alert
    if (recentData[0].condition === conditionThreshold || recentData[1].condition === conditionThreshold) {
      console.log(`Alert: Weather condition '${conditionThreshold}' detected!`);
      // Trigger additional alerts
    }

  } catch (error) {
    console.error('Error checking weather thresholds:', error);
  }
};

module.exports = { checkThresholds };
