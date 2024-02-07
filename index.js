const express = require('express');
// storing port number, client_id, secret_id in env variables 
require('dotenv/config'); 
const app = express();

// using port number in env variables as it may change in production env
const port = process.env.PORT;

app.use('/', (req, res) =>{
    console.log('Server is running');
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});