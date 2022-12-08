const express = require('express');
const app = express();
const axios = require('axios');

/**
 * function to redirect traffic from http to https
 */
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
app.use(requireHTTPS);
/**
 * used to serve our static file
 */
app.use(express.static('./dist/angular'));

/**
 * used to redirect paths to index.html file in dist folder
 */
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: '/dist/angular/'}
    
);
});


    /**
   * API options used for axios
   */
    var options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/forecast?q=warsaw&units=metric&lang=en&&appid=',
    headers: {
        //API key created in heroku
    'api-key': process.env.OpenWeatherAPIKey, 
    }
    };

/**
  * API call
  * This url will be used in the angular app to request the api call
  * but the actual api call will made here in the server and the response will be sent back to angular app
  */ 
app.get("/src/app/services/weather", (req,res) =>{
    axios(options).then(dataResponse =>{
    //API response
    res.json({data: dataResponse.data});
    console.log("dataResponse - server.js", dataResponse)
    }).catch(err =>{
    //error handler  
    next(err);
    console.log(err);
    })
    })
    /**
     * listen to request at the port specified from env var PORT or default Heroku port 8080
     */
    app.listen(process.env.PORT || 8080);