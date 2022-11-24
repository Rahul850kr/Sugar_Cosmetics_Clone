
const express = require("express");
const { connection } = require("./Configs/db");
require('dotenv').config()
const app =express();
const port = process.env.PORT || 8080


app.listen(port,async()=>{
    try{
        await connection;
        console.log("Connected to DB success")
    }
    catch(err){
        console.log("Failed to connect to DB")
    }
    console.log(`Listening on port ${port}`)
})