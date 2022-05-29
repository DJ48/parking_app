const vehicleController = require("../controllers/vehicle.controller");
const findParkingArea = require("../middlewares/findParkingLot");
const findVehicleType = require("../middlewares/findVehicleType");
const freeParkingLot = require("../middlewares/freeParkingLot");

module.exports = (app)=>{
    app.post("/parking/api/v1/vehicle-park", findParkingArea.findParkingLot ,vehicleController.park);
    app.get("/parking/api/v1/exit-park/:id",[ findVehicleType.findVehicleType, freeParkingLot.freeParkingLot ],vehicleController.exit);
}