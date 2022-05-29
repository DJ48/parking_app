/**
 * Controller for vehicle parking/exit
*/

const constants = require("../utils/constants");
const Parking = require("../models/parkingLot.model");
const Rate = require("../models/rate.model");
const Area = require("../models/area.model");
const Vehicle = require("../models/vehicle.model");



exports.park = async(req,res) =>{

    console.log("park api called!!!!")
    console.log(req.body);

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
