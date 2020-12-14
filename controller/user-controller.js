"use-strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModels = require("../models/login-user");

class UserLoginControl {
  static userLogin = async (req, res, next) => {
    try {
      const userController = await userModels.find({
        username: req.body.username,
      });
      if (!userController) {
        throw new Error("invalid username and password");
      }
      if (!bcrypt.compareSync(password, userController.password)) {
        throw new Error("invalid username / password");
      }
      const tokenLoad = {
        userID: user._id,
      };
      const jwtLoad = jwt.sign(tokenLoad, "adm1n");
      res.status(201).json({
        data: userController,
        token: jwtLoad,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UserLoginControl;
