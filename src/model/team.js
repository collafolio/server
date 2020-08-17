const mongoose = require('mongoose');
const { Schema } = mongoose;

const Member = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Team = new Schema({
  members: [Member],
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: false,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Team', Team);
