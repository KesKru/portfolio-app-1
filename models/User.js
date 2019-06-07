const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const md = require('../models/index');

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.hashPassword = function() {
  return bcrypt.hash(this.password, 10);
  // .then(function(hash) {
  //     // Store hash in your password DB.
  // });
};

UserSchema.methods.comparePassword = function(passwordToCheck) {
  return bcrypt.compare(passwordToCheck, this.password);
  // .then(function(res) {
  //   // res == true
  // });
};

module.exports = User = mongoose.model('User', UserSchema);
