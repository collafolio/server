const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  positions: [{ type: String, required: true }],
  gender: String,
  age: Number,
  about: String,
});

module.exports = mongoose.model('Profile', ProfileSchema);
