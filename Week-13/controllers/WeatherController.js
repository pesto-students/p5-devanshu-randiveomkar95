const axios = require("axios").create({baseUrl: "https://api.openweathermap.org/data/2.5/weather"});
const Data  = require('../constants')
const {API_KEY, BASE_URL}  = Data

//Get Weather Data
exports.weather = (req, res, next) => {
    axios({
        url: `${BASE_URL}q=pune&appid=${API_KEY}`,
        method: "get",
    })
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
};

//Get Weather Data by City and days
exports.weatherByCity = (req, res, next) => {
    let city = req.body.city;
    // const url = `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`;
    axios({
        url: `${BASE_URL}q=${city}&days=2&appid=${API_KEY}`,
        method: "post",
    })
    .then(response => {
        res.status(200).json(response.data);
    })
    .catch((err) => {
        res.status(500).json({ message: err });
    });
};
