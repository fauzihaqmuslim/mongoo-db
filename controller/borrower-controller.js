const { static } = require("express");
const borrowerBoks = require("../models/borrow_boks");

class BorrowerController {
  static createBorrower = async (req, res) => {
    try {
      const borrower = await borrowerBoks.create({
        borrower_name: req.body.borrower_name,
        books_id: req.body.books_id,
        is_returned: req.body.is_returned,
        borrower_date: req.body.borrower_date,
        returned_date: req.body.returned_date,
      });
      res.status(201).json({
        messege: "create borrower",
        data: borrower,
      });
    } catch (error) {
      console.log(error);
    }
  };
  static findBorrower = async (req, res) => {
    try {
      const findingBorrower = await borrowerBoks.find({
        borrower_name: req.body.borrower_name,
        books_id: req.body.books_id,
        is_returned: req.body.is_returned,
        borrower_date: req.body.borrower_date,
        returned_date: req.body.returned_date,
      });
      res.status(201).json({
        messege: "create borrower",
        data: findingBorrower,
      });
    } catch {
      res.status(400).send({
        messege: "error",
      });
    }
  };
  static updateBorrower = async (req, res) => {
    try {
      const borrower = await borrowerBoks.updateOne({
        books_id: req.params.books_id,
      });
      res.status(201).json({
        messege: "update borrower",
        data: borrower,
      });
    } catch {
      res.status(400).send({
        messege: "error",
      });
    }
  };
  static deleteBorrower = async (req, res) => {
    borrowerBoks.deleteOne(
      {
        books_id: req.params.books_id,
      },
      (error, result) => {
        if (error) {
          res.status(400).send({
            messege: "error",
          });
        } else {
          res.status(200).send({
            messege: "berhasil delete borrow books",
          });
        }
      }
    );
  };
}

module.exports = BorrowerController;
