"use strict";

const mangoose = require("mongoose");

const UserSchema = new mangoose.Schema(
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

const UserLogin = mangoose.model("user_login", UserSchema);
module.exports = UserLogin;
