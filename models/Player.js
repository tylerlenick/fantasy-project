const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Player = mongoose.model('player', PlayerSchema);