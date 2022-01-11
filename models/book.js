const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genres: [String],
    categories: [String],
    releaseYear: Number // <-- This property needs to be on your user model for your project
    // reviews: [reviewSchema]
  
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Book', bookSchema);
