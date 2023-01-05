const express = require('express');
const axios = require("axios").create({baseUrl: "https://api.openweathermap.org/data/2.5/weather"});
const Data  = require('./constants')
const {API_KEY}  = Data
const app = express();
app.use(express.json());

    app.get("/", (req, res) => {
        axios({
            url: `https://api.openweathermap.org/data/2.5/weather?q=pune&appid=${API_KEY}`,
            method: "get",
        })
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
    });

    app.post("/search/by/city",(req, res) => {
        let city = req.body.city;
        axios({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
            method: "post",
        })
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
    });


app.listen(3000, ()=> console.log("running on port 3000"))