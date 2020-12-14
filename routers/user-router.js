"use strict";

const Router = require("express").Router();

const adminControl = require("../controller/admin-controller");
const userControl = require("../controller/user-controller");

const authentication = require("../middleware/authentication");
const authorization = require("../middleware/autorization");

Router.get(
  "/",
  authentication,
  authorization,
  (adminControl, userControl).getAll
);

Router.post("/admin", adminControl.adminLogin);
Router.post("/user", userControl.userLogin);

module.exports(Router);
