const Router = require("express").Router();

const rackRouter = require("./racks_router");
const borrowBooks = require("./borrower-controller");
const books = require("./books-router");

Router.use("/racks", rackRouter);
Router.use(function (err, req, res, next) {
  res.status(400).send(err.message);
});
Router.use("/borrow_books", borrowBooks);
Router.use("/books", books);

module.exports = Router;
