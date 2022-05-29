/**
 * This file will hold the schema for the Vehicle Resource
 */

 const mongoose = require("mongoose");

 const vehicleSchema = new mongoose.Schema({
     vehicleNumber : {
         type : String,
         required : true
     },
     parkingLotName : {
         type : String,
         required : true,
     },
     areaName : {
         type : String,
         ref : "Area"
     },
     entryTime : {
         type : Date,
         immutable : true,
         default : ()=>{
             return Date.now();
         }
     },
     exitTime : {
         type : Date,
         immutable : true,
     },
     duration : {
         type : Number
     },
     amountPaid : {
         type : Number,
     },
 })
 
 module.exports = mongoose.model("Vehicle", vehicleSchema);