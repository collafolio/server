const mongoose = require('mongoose');
const { Schema } = mongoose;

// Sub Documents
const Skill = new Schema({
  group: String,
  skill: String,
  level: Number,
});

const Experience = new Schema({
  name: String,
  description: String,
  position: String,
  task: [String],
  term: Number,
});

const Education = new Schema({
  school: String,
  major: String,
  status: String,
});

const Reference = new Schema({
  portfolio: String,
  blog: String,
  github: String,
});

// Main Document
const Resume = new Schema({
  fullname: { type: String, required: true },
  position: { type: String, required: true },
  mobile: { type: String, required: true },
  picture: { type: String, required: false },
  gender: { type: String, required: false },
  age: { type: String, required: false },
  skills: [{ type: Skill, required: false }],
  experiences: [{ type: Experience, required: false }],
  educations: [{ type: Education, required: false }],
  references: [{ type: Reference, required: false }],
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

module.exports = mongoose.model('Resume', Resume);
