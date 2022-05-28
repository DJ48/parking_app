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
         type : mongoose.SchemaTypes.ObjectId,
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
         default : ()=>{
             return Date.now();
         }
     },
     duration : {
         type : Number,
         required : true,
     },
     amountPaid : {
         type : Number,
         required : true,
     },
 })
 
 module.exports = mongoose.model("Vehicle", vehicleSchema);