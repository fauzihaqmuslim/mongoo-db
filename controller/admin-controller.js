"use-strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminLogin = require("../models/login-admin");

class AdminLoginController {
  static adminLogin = async (req, res, next) => {
    try {
      const adminController = await adminLogin.find({
        username: req.body.username,
      });
      if (!adminController) {
        throw new Error("invalid username and password");
      }
      if (!bcrypt.compareSync(password, adminController.password)) {
        throw new Error("invalid username / password");
      }
      const tokenLoad = {
        userID: user._id,
      };
      const jwtLoad = jwt.sign(tokenLoad, "adm1n");
      res.status(201).json({
        data: adminController,
        token: jwtLoad,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AdminLoginController;
