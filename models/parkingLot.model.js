/**
 *  This file represents the schema for the parking resource
 */

 const mongoose = require("mongoose");
 const constants = require("../utils/constants");
 
 const parkingSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    type1VehicleCapacity : {
        type : Number,
        required : true
    },
    type1VehicleParked : {
        type : Number,
        required : true,
    },
    type1VehicleParkingStatus : {
        type : Number,
        required : true,
        default : constants.parkingStatus.isAvailable //1(Available) 0(Not Available)
    },
    type2VehicleCapacity : {
       type : Number,
       required : true
    },
    type2VehicleParked : {
        type : Number,
        required : true,
    },
    type2VehicleParkingStatus : {
        type : Number,
        required : true,
        default : constants.parkingStatus.isAvailable //1(Available) 0(Not Available)
    },
    type3VehicleCapacity : {
        type : Number,
        required : true
    },
    type3VehicleParked : {
        type : Number,
        required : true,
    },
    type3VehicleParkingStatus : {
        type : Number,
        required : true,
        default : constants.parkingStatus.isAvailable //1(Available) 0(Not Available)
    },
 })
 
 module.exports = mongoose.model("Parking", parkingSchema);