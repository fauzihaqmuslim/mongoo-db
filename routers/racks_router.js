const Router = require("express").Router();
const Racks = require("../controller/racks-controller");
Router.post("/", Racks.createRacks);
Router.get("/", Racks.findRacks);
Router.patch("/", Racks.updateRacks);
Router.delete("/", Racks.deleteRacks);
module.exports = Router;
