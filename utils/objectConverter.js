/**
 *  It will have the logic to tranform the object.
 */

 exports.vehicleResponse = (vehicles)=>{
    vehiclesResponse = []

    vehicles.forEach(vehicle => {
        vehiclesResponse.push({
            vehicleNumber: vehicle.vehicleNumber,
            Lot: vehicle.parkingLotName,
            Area: vehicle.areaName,
            Duration: vehicle.duration,
            Amount_Paid: vehicle.amountPaid
        });
    })

    return vehiclesResponse;
}