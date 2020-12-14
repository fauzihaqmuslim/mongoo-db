"use strict";

const mongoose = require("mongoose");

const rackSchema = mongoose.Schema(
  {
    section: {
      type: String,
    },
    number: {
      type: Number,
    },
    floor: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);
const Racks = mongoose.model("racks", rackSchema);
module.exports = Racks;
