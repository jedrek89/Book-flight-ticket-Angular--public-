import fetch from 'node-fetch';

options = {
    method: 'GET',
    headers: {
        'X-Access-Token': process.env.FlightDataToken,
        'xRapidAPIHost': process.env.xRapidAPIHost,
        'X-RapidAPI-Key': process.env.FlightDataKey,
    }
};


exports.handler = async function(event, context) {
    const flyFrom = event.queryStringParameters.flyFrom || '';
    const departureDate = event.queryStringParameters.departureDate || '';
    const passNum = event.queryStringParameters.passNum || '';
    const flyTo = event.queryStringParameters.flyTo || '';
    const returnDate = event.queryStringParameters.returnDate || '';
    const currency = event.queryStringParameters.currency || '';
    const response = await fetch(`${process.env.FlightDataUrl}${flyTo}&origin=${flyFrom}&currency=${currency}&show_to_affiliates=true&depart_date=${departureDate}&return_date=${returnDate}`, options)
    const data = await response.json()
    const data2 = {flyFrom: `${flyFrom}`, departureDate: `${departureDate}`, passNum: `${passNum}`, flyTo: `${flyTo}`, flyTo: `${flyTo}`, returnDate: `${returnDate}`, currency: `${currency}`}
    return{
    statusCode: 200,
    body: JSON.stringify({paramSend: data2, responseAPI: data})
    }
}