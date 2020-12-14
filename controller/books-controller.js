const booksModels = require("../models/books");

class BookController {
  static createBooks = async (req, res) => {
    try {
      const books = await booksModels.create({
        author: req.body.author,
        title: req.body.title,
        publish_year: req.body.publish_year,
        rack_id: req.body.rack_id,
      });
      res.status(201).json({
        messege: "create book",
        books: books,
      });
    } catch {
      res.status(400).send({
        messege: "error",
      });
    }
  };
  static findBooks = async (req, res) => {
    try {
      const books = await booksModels.find({
        author: req.body.author,
        title: req.body.title,
        publish_year: req.body.publish_year,
        rack_id: req.body.rack_id,
      });
      res.status(201).json({
        messege: "create book",
        books: books,
      });
    } catch {
      res.status(400).send({
        messege: "error",
      });
    }
  };

  static updateBooks = async (req, res) => {
    try {
      const books = await booksModels.updateOne({
        author: req.body.author,
        title: req.body.title,
        publish_year: req.body.publish_year,
        rack_id: req.params.rack_id,
      });
      res.status(201).json({
        messege: "update books",
        data: books,
      });
    } catch {
      res.status(400).send({
        messege: "error",
      });
    }
  };
  static deleteBooks = async (req, res) => {
    booksModels.deleteOne(
      {
        _id: req.params.id,
      },
      (error, result) => {
        if (error) {
          res.status(400).send({
            messege: "error",
          });
        } else {
          res.status(200).send({
            messege: "berhasil delete",
          });
        }
      }
    );
  };
}

module.exports = BookController;
