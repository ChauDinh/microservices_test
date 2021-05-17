const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  name: String,
  type: {
    type: String,
    default: "book"
  },
  author: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Book", Book);