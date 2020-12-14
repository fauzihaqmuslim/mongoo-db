const Router = require("express").Router();
const borrower = require("../controller/borrower-controller");
Router.get("/", borrower.findBorrower);
Router.post("/", borrower.createBorrower);
Router.patch("/", borrower.updateBorrower);
Router.delete("/", borrower.deleteBorrower);
module.exports = Router;
