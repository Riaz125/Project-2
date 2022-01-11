const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genres: [String],
    categories: [String],
    releaseYear: Number
    // reviews: [reviewSchema]
  
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Book', bookSchema);
