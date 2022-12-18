import fetch from 'node-fetch';



exports.handler = async function(event, context) {
    const response = await fetch(`${process.env.FlightDataUrl}${flyToVal}&origin=${flyFromVal}&currency=${currency}&show_to_affiliates=true&depart_date=${departDate}&return_date=${returnDate}`)
    const data = await response.json()

    return{
    statusCode: 200,
    body: JSON.stringify({message: data})
    }
}