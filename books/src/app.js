const express = require("express");
const Book = require("./model/Book");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.json({
    msg: "books"
  })
});

app.get("/api/v1/books", async (req, res, next) => {
  const books = await Book.find({});
  res.json(books);
});

app.post("/api/v1/books", async (req, res, next) => {
  const newBook = await Book.create({
    name: req.body.name,
    author: req.body.author,
    createdAt: req.body.year
  });

  const savedBook = await newBook.save();

  res.json(savedBook);
})

module.exports = app;