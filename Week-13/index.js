const axios = require("axios");
const express = require('express');

const app = express();

async function getUser() {
  try {
    const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=e62589f5aaf9464e907170956220512&q=Pune&aqi=no');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

console.log(getUser());