const mongoose = require('mongoose');
const { Schema } = mongoose;

const PositionSchema = new Schema({
  category: String,
  name: String,
});

const ProjectSchema = new Schema({
  name: String,
  about: String,
  year: Number,
  position: String,
  task: String,
});

const ProfileSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  positions: [{ type: PositionSchema, required: true }],
  address: { type: String, required: true },
  about: String, // 자기소개 기록
  gender: String,
  age: String,
  uniques: String, // 특이사항 기록
  projects: [ProjectSchema],
  portfolioUrl: String,
  blogUrl: String,
});

module.exports = mongoose.model('Profile', ProfileSchema);
