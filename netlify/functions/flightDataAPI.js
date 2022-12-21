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
    if (typeof event.body === 'undefined') {
            return{
                statusCode: 200,
                body: JSON.stringify({"response": "event.body = undefined"}) 
                }
    }

    // if body from POST method exist
    else{
        let eventBody = JSON.parse(event.body); // convert JSON fromat to object
        let flyFrom = eventBody.flyFrom;
        let departureDate = eventBody.departureDate;
        let passNum = eventBody.passNum;
        let flyTo = eventBody.flyTo;
        let returnDate = eventBody.returnDate;
        let currency = eventBody.currency;

        // API call
        let response = await fetch(`https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v2/prices/week-matrix?destination=${flyTo}&origin=${flyFrom}&currency=${currency}&show_to_affiliates=true&depart_date=${departureDate}&return_date=${returnDate}`, options);
        response = await response.json()
        return{
            statusCode: 200,
            body: JSON.stringify(response)
            }
    }
}