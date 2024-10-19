// controllers/weatherSummaryController.js
const WeatherData = require('../models/WeatherData');
const DailySummary = require('../models/DailySummary'); // Create this model for storing summaries

const aggregateDailyWeather = async () => {
  try {
    // Get weather data for the past 24 hours
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);

    const weatherData = await WeatherData.find({
      timestamp: { $gte: start, $lt: end }
    });

    if (weatherData.length === 0) {
      console.log('No weather data found for aggregation.');
      return;
    }

    // Aggregate the data
    const dailySummary = weatherData.reduce(
      (summary, data) => {
        summary.totalTemp += parseFloat(data.temp);
        summary.maxTemp = Math.max(summary.maxTemp, data.maxTemp);
        summary.minTemp = Math.min(summary.minTemp, data.minTemp);
        
        // Track weather conditions frequency
        summary.conditionsCount[data.condition] = (summary.conditionsCount[data.condition] || 0) + 1;

        summary.dataPoints++;
        return summary;
      },
      {
        totalTemp: 0,
        maxTemp: -Infinity,
        minTemp: Infinity,
        conditionsCount: {},
        dataPoints: 0
      }
    );

    // Calculate the average temperature
    dailySummary.avgTemp = (dailySummary.totalTemp / dailySummary.dataPoints).toFixed(2);

    // Determine the dominant weather condition
    dailySummary.dominantCondition = Object.keys(dailySummary.conditionsCount).reduce((a, b) =>
      dailySummary.conditionsCount[a] > dailySummary.conditionsCount[b] ? a : b
    );

    // Create the summary object to save
    const newSummary = new DailySummary({
      date: start.toDateString(), // Store date as string
      avgTemp: dailySummary.avgTemp,
      maxTemp: dailySummary.maxTemp,
      minTemp: dailySummary.minTemp,
      dominantCondition: dailySummary.dominantCondition
    });

    await newSummary.save();
    console.log('Daily weather summary saved:', newSummary);

  } catch (error) {
    console.error('Error aggregating daily weather data:', error);
  }
};

module.exports = { aggregateDailyWeather };
