exports.handler = async function(event, context) {
    const WorldTimeURL = process.env.WorldTimeURL;
    fetch(`${WorldTimeURL}`)
    .then((response) => response.json())
    .then((data) => console.log(data));

    // return{
    //     // statusCode: 200,
    //     // body: JSON.stringify({message: 'Netlify function works!!'})
    //     statusCode: 200,
    //     body: JSON.stringify({data})
    // }
}