const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  resume: {
    type: Schema.Types.ObjectId,
    ref: 'Resume',
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', User);
