import fetch from 'node-fetch';

exports.handler = async function(event, context) {
    const WorldTimeAPI = 'https://worldtimeapi.org/api/timezone/Europe/Berlin'
    const response = await fetch(WorldTimeAPI)
    const data = await response.json()

    return{
    statusCode: 200,
    body: JSON.stringify({message: data})
    }
}