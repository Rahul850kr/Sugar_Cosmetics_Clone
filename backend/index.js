
const express = require('express');
const { connection } = require('./config/db');
require('dotenv').config();
const port = process.env.PORT || 7500;
const app = express();

app.listen(port,async ()=>{
    try{
        await connection;
        console.log(`listening on port ${port}`)
        console.log('Connected to DB Success')
    }catch(err){
        console.log('Failed to connect to DB')
    }
})