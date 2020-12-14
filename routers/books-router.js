const Router = require("express").Router();
const books = require("../controller/books-controller");
Router.post("/", books.createBooks);
Router.get("/", books.findBooks);
Router.patch("/", books.updateBooks);
Router.delete("/", books.deleteBooks);
module.exports = Router;
