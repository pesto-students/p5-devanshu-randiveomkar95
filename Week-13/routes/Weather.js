const express = require('express');

const router  = express.Router();

const WeatherController = require('../controllers/WeatherController');

router.get('/weather', WeatherController.weather);
router.post('/weather/by/city', WeatherController.weatherByCity);

module.exports = router;