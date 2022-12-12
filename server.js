require('dotenv').config();
const axios = require('axios');
const express = require('express');
router = express.Router();
var https = require('https');


// display values from .env file
// console.log("weatherOptions", weatherOptions);

// static preview Angular App
app.use(express.static(__dirname + "/dist/angular"));

axios.get('https://worldtimeapi.org/api/timezone/Europe/Berlin')
.then(response => {
console.log(response);
})
.catch(error => {
console.log(error);
});


axios.get(`${process.env.OpenWeatherURL}${process.env.OpenWeatherKEY}`)
.then(response =>  {
console.log(response);
})
.catch(error => {
console.log(error);
});


// axios.get(`${process.env.FlightDataUrl}destination=${flyToVal}&origin=${flyFromVal}&currency=${currency}&show_to_affiliates=true&depart_date=${departDate}&return_date=${returnDate}`)
// .then(response =>  {
// console.log(response);
// })
// .catch(error => {
// console.log(error);
// });


// listen port
app.listen(4300);