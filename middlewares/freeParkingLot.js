const Area = require("../models/area.model");
const constants = require("../utils/constants");

freeParkingLot = async(req,res,next)=>{

    let queryObj = { 
        parkingLotName : req.body.parkingLotName,
        areaName : req.body.areaName
    };

    try{
        const ParkingArea = await Area.findOne(queryObj);
        if(ParkingArea.flag == constants.areaStatus.unoccupied){
            return res.status(200).send({
                message : "Can't generate duplicate bill"
            })
        }
        else{
            ParkingArea.flag = constants.areaStatus.unoccupied;
            await ParkingArea.save();
            next();
        }
    }catch(err){
        console.log(err);
    }    
}

module.exports = {freeParkingLot}