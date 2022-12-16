exports.handler = async function(event, context) {
    fetch(`${Deno.env.get("WorldTimeURL")}`)
    .then((response) => response.json())
    .then((data) => console.log(data));

    // return{
    //     // statusCode: 200,
    //     // body: JSON.stringify({message: 'Netlify function works!!'})
    //     statusCode: 200,
    //     body: JSON.stringify({data})
    // }
}