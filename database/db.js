const mongoose = require("mongoose");
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;

function connectToMongoDB(){
    mongoose.connect(
        MONGODB_URI,
    {
        dbName: "bookStore",
        useNewUrlParser: true,
        useUnifiedTopology: true,              
    },
        (err)=>
        err ? console.log(err) : console.log("Connected to bookStore database")
    );
}

module.exports = {connectToMongoDB};