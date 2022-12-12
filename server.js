require('dotenv').config();
const axios = require('axios');
const express = require('express');
router = express.Router();
var https = require('https');
const app = express();

// display values from .env file
// console.log("weatherOptions", weatherOptions);

// static preview Angular App
app.use(express.static(__dirname + "/dist/angular"));

// fetch data from API to console to /api/time
app.get('/api/time', (req,res) =>{
axios(process.env.WorldTimeURL)
.then(response => {
res.send("time API works!")
console.log(response);
})
.catch(error => {
console.log(error);
});
})

// fetch data from API to console to /api/weather
app.get('/api/weather', (req,res) =>{
axios(`${process.env.OpenWeatherURL}${process.env.OpenWeatherKey}`)
.then(response => {
res.send("weather API works!")
console.log(response);
})
.catch(error => {
console.log(error);
});
})


// listen port
app.listen(3000);