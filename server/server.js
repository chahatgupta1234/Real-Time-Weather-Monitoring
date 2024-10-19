require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors'); // Import the cors package
const connectDB = require('./config/db'); // Import the MongoDB connection
const { fetchWeather } = require('./controllers/weatherController'); // Import the fetchWeather function
const { aggregateDailyWeather } = require('./controllers/weatherSummaryController'); // Import weather aggregation
const { checkThresholds } = require('./controllers/alertController'); // Import alert checking logic

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware 
app.use(cors({
    origin: 'http://localhost:3000' // Allow only this origin for cross-origin requests
}));

// Middleware to parse JSON requests
app.use(express.json()); // Use this to handle JSON payloads

// Connect to MongoDB
connectDB(); 

// Use the weather routes with the /api prefix
app.use('/api', require('./routes/weatherRoutes')); // Use your weather routes
app.use('/api', require('./routes/summaryRoutes')); // Add this for summary and alert routes

// Fetch weather data every 5 minutes
setInterval(fetchWeather, 300000); // 300,000 milliseconds = 5 minutes

// Run daily weather summary aggregation at midnight
setInterval(() => {
  const now = new Date();
  if (now.getHours() === 0) {
    aggregateDailyWeather(); // Aggregates daily weather data
  }
}, 60 * 60 * 1000); // Check every hour

// Run alert checks every 5 minutes for threshold violations
setInterval(() => {
  checkThresholds(); // Check if temperature thresholds are breached
}, 5 * 60 * 1000); // Every 5 minutes

// Start the server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
