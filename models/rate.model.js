/**
 *  This file represents the schema for the rate resource
 */

 const mongoose = require("mongoose");
 
 const rateSchema = new mongoose.Schema({
     typeOfVehicle : {
         type : String,
         required : true
     },
     firstTwoHrsRate : {
         type : Number,
         required : true
     },
     NextTwoHrsRate : {
         type : Number,
         required : true,
     },
 })
 
 module.exports = mongoose.model("Rate", rateSchema);