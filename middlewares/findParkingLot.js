const Area = require("../models/area.model");
const constants = require("../utils/constants");

findParkingLot = async(req,res,next)=>{

    const vehicleType = req.body.vehicleType;

    let queryObj = { flag : constants.areaStatus.unoccupied};

    if(vehicleType == constants.vehicleType.twoWheeler){
        queryObj.areaName = /^A/;
    }else if(vehicleType == constants.vehicleType.hatchbackCar){
        queryObj.areaName = /^B/;
    }else{
        queryObj.areaName = /^C/;
    }

    try{
        const ParkingArea = await Area.findOne(queryObj);
        if(ParkingArea){
            req.body.parkingLotName = ParkingArea.parkingLotName;
            req.body.areaName = ParkingArea.areaName;
            ParkingArea.flag = constants.areaStatus.occupied;
            await ParkingArea.save();
            next();
        }else{
            return res.status(201).send("No Space available for Parking");
        }
    }catch(err){
        console.log(err);
    }    
}

module.exports = {findParkingLot}