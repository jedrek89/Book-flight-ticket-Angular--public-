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

// fetch data from API to console
router.route('/api/time')
axios(process.env.WorldTimeURL)
.then(response => {
console.log(response);
return console.log("data recived");
})
.catch(error => {
console.log(error);
});


// with URL
// app.get('/api/time', (req,res) =>{
// axios(process.env.WorldTimeURL)
// .then(response => {
// console.log(response);
// })
// .catch(error => {
// console.log(error);
// });
// })

// axios.get(`${process.env.OpenWeatherURL}${process.env.OpenWeatherKEY}`)
// .then(response =>  {
// console.log(response);
// })
// .catch(error => {
// console.log(error);
// });


// axios.get(`${process.env.FlightDataUrl}destination=${flyToVal}&origin=${flyFromVal}&currency=${currency}&show_to_affiliates=true&depart_date=${departDate}&return_date=${returnDate}`)
// .then(response =>  {
// console.log(response);
// })
// .catch(error => {
// console.log(error);
// });


// listen port
app.listen(4300);