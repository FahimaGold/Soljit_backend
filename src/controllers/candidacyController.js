const axios = require('axios');
const querystring = require('querystring');

const baseURL = 'https://soljit35-dev-ed.my.salesforce.com/services/data/v55.0';
// Function to retrieve record details using Salesforce REST API

const getCandidacyRecordDetails = async (req, res) => {
    try {
         // Extract access token from request headers
         const accessToken = req.headers.authorization.split(' ')[1];

        const response = await axios.get(`${baseURL}/sobjects/Candidature__c/a004L000002gCJK`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log(response.data)
        res.json(response.data);
    } catch (error) {
        console.error('Error retrieving record details:', error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = {
    getCandidacyRecordDetails
  };
