const express = require('express');
const { getDailySummaries, getAlerts } = require('../controllers/summaryController');

const router = express.Router();

// Route to get daily summaries
router.get('/daily-summaries', getDailySummaries);

// Route to get alerts
router.get('/alerts', getAlerts);

module.exports = router;
