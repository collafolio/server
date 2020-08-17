const mongoose = require('mongoose');
const { Schema } = mongoose;

const Recruit = new Schema({
  deadline: Date,
  title: String,
  target: {
    position: String,
    number: Number,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
    required: false,
  },
  applicants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Recruit', Recruit);
