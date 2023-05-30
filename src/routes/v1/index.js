const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");

const router = express.Router();

router.post("/city" , CityController.create);
router.delete("/city/:id" , CityController.destroy);
router.get("/city/:id" , CityController.get);
router.get("/city" , CityController.getAll);
router.patch("/city/:id", CityController.update);

//flight
router.post("/flight" , FlightController.create);
router.get("/flight", FlightController.getAll);
router.get("/flight/:id" , FlightController.getById)
router.patch("/flight/update" , FlightController.updateSeat);

module.exports = router;
