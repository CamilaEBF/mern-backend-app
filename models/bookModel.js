const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookModel = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array,
    required: true,
  },
  genre: {
    type: String,
  },
  read: {
    type: Boolean,
    default: false,
  },
  categories: {
    type: Array,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Book', bookModel);