"use strict";

const jwt = require("jsonwebtoken");

const userModel = require("../models/login-user");
const adminModel = require("../models/login-admin");

const authenticationUser = async (req, res, next) => {
  try {
    const { accesstokenUser } = req.headers;
    if (!accesstokenUser) {
      throw new Error("token reqired");
    }

    const payload = jwt.verify(accesstokenUser, "us3r");
    const user = await userModel.findById(payload.userID);

    req.user = {
      userID: user._id,
      role: user.role,
    };

    next();
  } catch (error) {
    next(error);
  }
};

const authenticationAdmin = async (req, res, next) => {
  try {
    const { accesstokenAdmin } = req.headers;

    if (!accesstokenAdmin) {
      throw new Error("token required");
    }

    const payload = jwt.verify(accesstokenAdmin, "4dmin");

    const admin = await adminModel.findById(payload.adminID);

    req.admin = {
      adminID: admin._id,
      role: admin.role,
    };
    next();
  } catch (error) {
    next(error);
  }
};

const authentication = { authenticationUser, authenticationAdmin };

module.exports = authentication;
