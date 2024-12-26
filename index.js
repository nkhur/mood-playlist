const request = require("request");
require('dotenv').config();

async function getAccessToken() {
    let client_id = process.env.CLIENT_ID;
    let client_secret = process.env.CLIENT_SECRET;

    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };
    
    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var token = body.access_token;
            console.log("Access Token: ", token);
            return token;
        } else {
            console.error('Error:', error || body);
        }
    });
}

// let access_token = await getAccessToken();
console.log(getAccessToken());