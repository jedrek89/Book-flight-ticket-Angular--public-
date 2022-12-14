require('dotenv').config();
const axios = require('axios');
const express = require('express');
router = express.Router();
var https = require('https');
const app = express();
const PORT = 3000;
var weatherData= [];

// display values from .env file
// console.log("weatherOptions", weatherOptions);

// static preview Angular App
app.use(express.static(__dirname + "/dist/angular"));

// fetch data from Wolrd Time API to console to /api/time
app.get('/api/time', (req,res) =>{
    axios(process.env.WorldTimeURL)
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {console.log(error);
    });
    })

// fetch Open Weather API data from API to console to /api/weather
app.get('/api/weather', (req,res) =>{
    axios(`${process.env.OpenWeatherURL}${process.env.OpenWeatherKey}`)
    .then(response => {
        // send respond to json - visible in browser
        res.json(response.data);
        // send normal respond
        // res.send(response);
        // display fetched data to node.js console
        // console.log(weatherData);
    })
    .catch(error => {console.log(error);
    });
})



// listen port
app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`))