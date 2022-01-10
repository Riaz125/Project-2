const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String // <-- This property needs to be on your user model for your project
  
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);

// Create your User Model