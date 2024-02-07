// we can use any api library, such as fetch api
// used axios because it is simple, and has extra features, such as canceling requests.

const axios = require('axios');
const querystring = require('querystring');

// Storing client_id, client_secret on server side as it is more secure than client side when it comes to attacks. Using env variables.

// The access token should be stored somewhere safe, Eg database, and encrypted. For this test, for the sake of simplicity, it is stored in an environment variable.

require('dotenv/config'); 
// Method to obtain OAuth access token
const getOAuthAccessToken = async (req, res) => {
    try {
    
      // salesforce api expects developers to provide data as form-url-encoded
      const response = await axios.post(
        'https://login.salesforce.com/services/oauth2/token',
        querystring.stringify({
          grant_type: 'password',
          client_secret: process.env.CLIENT_SECRET,
          client_id: process.env.CLIENT_ID,
          username: process.env.USERNAME,
          password: process.env.PASSWORD
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      console.log("OAuth Response: ", response.data); // Log the OAuth response data
      res.json(response.data);
      process.env.ACCESS_TOKEN = response.data;
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message); // Log the error response or error message
      res.status(500).json({ error: 'Internal Server Error' }); // Return an error response with status code 500
    }
  };
  
  module.exports = {
    getOAuthAccessToken
  };