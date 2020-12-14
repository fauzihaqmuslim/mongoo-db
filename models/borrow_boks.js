"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const borrowSchema = new Schema(
  {
    borrower_name: {
      type: String,
    },
    books_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",
    },
    is_returned: {
      type: Boolean,
    },
    borrower_date: {
      type: Date,
    },
    returned_date: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

const Borrower = mongoose.model("borrow_books", borrowSchema);
module.exports = Borrower;
