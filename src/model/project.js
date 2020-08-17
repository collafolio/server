const mongoose = require('mongoose');
const { Schema } = mongoose;

const Project = new Schema({
  title: String,
  description: String,
  references: [String],
  channel: String,
  startAt: Date,
  endAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', Project);
