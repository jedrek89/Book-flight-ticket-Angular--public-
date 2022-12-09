require('dotenv').config();
require('axios');
const express = require('express');
const app = express();
const weather = express();
const flight = express();

var weatherOptions = {
    method: 'GET',
    url: process.env.OpenWeatherURL,
    headers: {
        'api-key': process.env.OpenWeatherKEY,
    }
}

var flightOptions = {
    method: 'GET',
    FlightDataToken: process.env.FlightDataToken,
    FlightDataKey: process.env.FlightDataKey,
}

// display values from .env file
console.log("weatherOptions", weatherOptions);
console.log("weatherOptions", flightOptions);


var options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/forecast?q=warsaw&units=metric&lang=en&&appid=',
    headers: {
    'api-key': process.env.OpenWeatherKEY, 
    }
    };

    weather.get('/api/weather', (req,res) =>{
        axios(weatherOptions).then(dataResponse =>{
        //API response
        res.json({data: dataResponse.data});
        console.log("data from API in Node", data);
        }).catch(err =>{
        //error handler  
        next(err);
        console.log(err);
        })
        })

//function to redirect traffic from http to https

// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }
// app.use(requireHTTPS);

// static file - local preview
app.use(express.static('./dist/angular'));

// used to redirect paths to index.html file in dist folder
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/angular/'}
    );
    });

// app.get('/dist/angular', (req,res) =>{
// axios(weatherOptions).then(dataResponse =>{
// //API response
// res.json({data: dataResponse.data});
// }).catch(err =>{
// //error handler  
// next(err);
// console.log(err);
// })
// })


// listen port
app.listen(process.env.PORT || 8080);