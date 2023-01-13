import fetch from 'node-fetch';

options = {
    method: 'GET',
    headers: {
        'X-Access-Token': process.env.FlightDataToken,
        'xRapidAPIHost': process.env.xRapidAPIHost,
        'X-RapidAPI-Key': process.env.FlightDataKey,
    }
};

exports.handler = async function(event, context, callback) {
    console.log("event.queryStringParameters", event.queryStringParameters);
    if ((typeof event.queryStringParameters.flyFrom === 'undefined' )|| typeof event.queryStringParameters.departDate === 'undefined' 
        || typeof event.queryStringParameters.flyTo === 'undefined' || typeof event.queryStringParameters.returnDate === 'undefined' 
        || typeof event.queryStringParameters.currency === 'undefined') {
        return{
            statusCode: 200,
            body: JSON.stringify("bad request") 
        }
    }
    
    // if body from POST method exist
    else{
        console.log("event.queryStringParameters", event.queryStringParameters);
        // API call
        let response = await fetch(`https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/week-matrix?destination=${event.queryStringParameters.flyTo}&origin=${event.queryStringParameters.flyFrom}&currency=${event.queryStringParameters.currency}&show_to_affiliates=true&depart_date=${event.queryStringParameters.departDate}&return_date=${event.queryStringParameters.returnDate}`, options);
        response = await response.json()
        return{
            statusCode: 200,
            body: JSON.stringify(response),
        }
    }
}