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

const getAllCandidates = async (req, res) =>{
    try {
        // Extract access token from request headers
        const accessToken = req.headers.authorization.split(' ')[1];

       const response = await axios.get(`${baseURL}/query?q=SELECT+Id,First_Name__c,Last_Name__c,Year__c,Year_Of_Experience__c+FROM+Candidature__c`, {
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
const updateCandidacyLastName = async (req, res) => {
    try {
         // Extract access token from request headers
         const accessToken = req.headers.authorization.split(' ')[1];
          // Construct the data payload for updating the last name
        const data = {
        Last_Name__c: req.body.newLastName
       };
     console.log(data.Last_Name__c)
        const response = await axios.patch(`${baseURL}/sobjects/Candidature__c/a004L000002gCJK`,data, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log(response.data)
        res.json(response.data);
    } catch (error) {
        console.error('Error updating record lastname:', error.response ? error.response.data : error.message);
        throw error;
    }
}
const insertNewCandidate = async (req, res) => {
    try {
        const accessToken = req.headers.authorization.split(' ')[1];
        const { firstname, lastname, yearOfExperience } = req.body;
    
        // Construct the data payload for the new candidate record
        const data = {
          First_Name__c: firstname,
          Last_Name__c: lastname,
          Year_Of_Experience__c: yearOfExperience
          // Add more fields as needed
        };
    
        // Make a POST request to insert the new record
        const response = await axios.post(`${baseURL}/sobjects/Candidature__c`, data, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        console.log(response.data)
        // Return the response from Salesforce API
        res.json(response.data);
      } catch (error) {
        console.error('Error inserting candidate record:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}


module.exports = {
    getCandidacyRecordDetails,
    updateCandidacyLastName,
    insertNewCandidate,
    getAllCandidates
  };
