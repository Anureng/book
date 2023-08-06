const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  rating: Number,
});

module.exports = mongoose.model("Book", bookSchema);
