const express = require('express');
const cors = require('cors')

// storing port number, client_id, secret_id in env variables 
require('dotenv/config'); 
const oAuthRoute = require('./src/routes/oAuthRoute'); 
const candidacyRoute =require('./src/routes/candidacyRoute');
const app = express();

// using port number in env variables as it may change in production env
const port = process.env.PORT;

// so that the React Client can requests this server
app.use(cors());

app.use('/', oAuthRoute);
app.use('/', candidacyRoute);
app.use('/', (req, res) =>{
    res.send("Hello");
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});