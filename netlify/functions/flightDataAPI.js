import fetch from 'node-fetch';
import { flightData } from '../../src/app/content/content.component'


options = {
    method: 'GET',
    headers: {
        'X-Access-Token': process.env.FlightDataToken,
        'xRapidAPIHost': process.env.xRapidAPIHost,
        'X-RapidAPI-Key': process.env.FlightDataKey,
    }
};


exports.handler = async function(event, context) {
    const response = await fetch(`${process.env.FlightDataUrl}${flightData.flyTo}&origin=${flightData.flyFrom}&currency=${flightData.currency}&show_to_affiliates=true&depart_date=${flightData.departure}&return_date=${flightData.return}`, options)
    const data = await response.json()
    return{
    statusCode: 200,
    body: JSON.stringify({message: data})
    }

}