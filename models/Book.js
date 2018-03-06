const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BookSchema = new Schema ({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('Book', BookSchema);
