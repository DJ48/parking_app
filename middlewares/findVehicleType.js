const Vehicle = require("../models/vehicle.model");
const constants = require("../utils/constants");

findVehicleType = async(req,res,next)=>{

    const vehicle = await Vehicle.findOne({
        _id : req.params.id
    });

    if(vehicle == null){
        return res.status(200).send({
            message : "Vehicle ID doesn't exist"
        })
    }

    req.body.entryTime = vehicle.entryTime;
    req.body.areaName = vehicle.areaName;
    req.body.parkingLotName =vehicle.parkingLotName;
    if(vehicle.areaName.charAt(0)=='A'){
        req.body.vehicleType = constants.vehicleType.twoWheeler;
    }else if(vehicle.areaName.charAt(0)=='B'){
        req.body.vehicleType = constants.vehicleType.hatchbackCar;
    }else{
        req.body.vehicleType = constants.vehicleType.suvCar;
    }
    next();
}

module.exports = {findVehicleType}