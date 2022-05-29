/**
 * Controller for vehicle parking/exit
*/

const constants = require("../utils/constants");
const Parking = require("../models/parkingLot.model");
const Rate = require("../models/rate.model");
const Area = require("../models/area.model");
const Vehicle = require("../models/vehicle.model");



exports.park = async(req,res) =>{

    const vehicleObjToBeStoredInDB = {
        vehicleNumber : req.body.vehicleNumber,
        parkingLotName : req.body.parkingLotName,
        areaName : req.body.areaName,
    }

    /**
     * Insert new vehicle details to the DB
     */
    try{
        const vehicleRecordCreated = await Vehicle.create(vehicleObjToBeStoredInDB);

        res.status(201).send(vehicleRecordCreated);
    }
    catch(err){
        console.error("Error while creating new parking: ", err.message);
        res.status(500).send({
            message : "some internal error while creating new parking"
        });
    }
}

exports.exit = async(req,res) =>{

    const entryTime = req.body.entryTime;
    const vehicleType = req.body.vehicleType;
    const exitTime = new Date();
    const duration = Math.floor((exitTime - entryTime) / 3600000);
    let totalAmount = 0;

    try{
        
        const rate = await Rate.findOne({
            typeOfVehicle : vehicleType
        })
        
        if(duration == 0){
            totalAmount = rate.firstTwoHrsRate;
        }else if(duration >=1 && duration <=2){
            totalAmount = duration * rate.firstTwoHrsRate;
        }else{
            totalAmount = 2 * rate.firstTwoHrsRate + (duration-2) * rate.NextTwoHrsRate;
        }
        
        const vehicle = await Vehicle.findOne({
            _id : req.params.id
        });

        vehicle.exitTime = exitTime;
        vehicle.duration = duration;
        vehicle.amountPaid = totalAmount;

        const updatedVehicleRecord = await vehicle.save();
        
        res.status(201).send(updatedVehicleRecord);
    }
    catch(err){
        console.error("Error while exit: ", err.message);
        res.status(500).send({
            message : "some internal error while exit"
        });
    }
}