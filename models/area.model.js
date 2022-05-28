/**
 * This file will hold the schema for the area Resource
 */

 const mongoose = require("mongoose");
 const constants = require("../utils/constants");

 const areaSchema = new mongoose.Schema({
     parkingLotName : {
         type : String,
         required : true
     },
     areaName : {
         type : String,
         required : true,
         unique : true
     },
     flag : {
         type : Number,
         required : true,
         default : constants.areaStatus.unoccupied // 1(unoccupied) 0(occupied)
     },
 })
 
 module.exports = mongoose.model("Area", areaSchema);