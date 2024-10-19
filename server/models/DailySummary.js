// models/DailySummary.js
const mongoose = require('mongoose');

const DailySummarySchema = new mongoose.Schema({
  date: { type: String, required: true },
  avgTemp: { type: Number, required: true },
  maxTemp: { type: Number, required: true },
  minTemp: { type: Number, required: true },
  dominantCondition: { type: String, required: true }
});

module.exports = mongoose.model('DailySummary', DailySummarySchema);
