const vehicleController = require("../controllers/vehicle.controller");
const findParkingArea = require("../middlewares/findParkingLot");

module.exports = (app)=>{
    app.post("/parking/api/v1/vehiclepark", findParkingArea.findParkingLot ,vehicleController.park)
}