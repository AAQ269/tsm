const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');
require('dotenv/config');


const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);


const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});




const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


