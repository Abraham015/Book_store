import express from "express";
import { PORT, MONGODBURL } from "./config.js";
import mongoose from "mongoose";

const app=express();

app.get('/', (request, response)=>{
    //console.log(request);
    return response.send("Welcome to MERN");
});

app.listen(PORT, ()=>{
    console.log(`App is listening to port: ${PORT}`);
});

mongoose.connect(MONGODBURL).then(()=>{
    console.log('App connected to DB');

}).catch((error)=>{
    console.log(error);
});