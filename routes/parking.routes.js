const parkingController = require("../controllers/parking.controller");

module.exports = (app)=>{
    app.post("/parking/api/v1/park",parkingController.park);
}