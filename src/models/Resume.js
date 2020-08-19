const mongoose = require('mongoose');
const { Schema } = mongoose;

// Sub Documents
const skillSchema = new Schema({
  group: String,
  skill: String,
  level: Number,
});

const experienceSchema = new Schema({
  name: String,
  description: String,
  position: String,
  task: String,
  when: Date,
});

const educationSchema = new Schema({
  where: String,
  studied: String,
  current: String,
});

// Main Document
const resumeSchema = new Schema(
  {
    author_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    position: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    picture: { type: String },
    gender: { type: String },
    age: { type: String },
    urls: {
      portfolio: String,
      blog: String,
      github: String,
    },
    skills: [{ type: skillSchema }],
    experiences: [{ type: experienceSchema }],
    educations: [{ type: educationSchema }],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Resume', resumeSchema);
