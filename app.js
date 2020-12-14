const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const indexRouter = require("./routers");

const url = "mongodb://localhost:27017/perpustakaan";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(indexRouter);

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error"));
db.once("open", () => console.log("connected db"));

app.listen(port, () => {
  console.log(`connected${port}`);
});
