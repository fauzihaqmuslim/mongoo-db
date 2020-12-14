"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    author: {
      type: String,
    },
    title: {
      type: String,
    },
    publish_year: {
      type: Date,
    },
    rack_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "racks",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Book = mongoose.model("books", bookSchema);
module.exports = Book;
