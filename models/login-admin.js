"use strict";

const mangoose = require("mongoose");

const AdminSchema = new mangoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
    },
  },
  {
    versionKey: true,
    timestamps: true,
  }
);

const AdminLogin = mangoose.model("admin_login", AdminSchema);
module.exports = AdminLogin;
