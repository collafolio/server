const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PositionSchema = new Schema({
  category: { type: String, required: true },
  position: { type: String, required: true },
});

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  role: {
    position: PositionSchema,
    tasks: [String],
  },
  year: Number,
});

const ResumeSchema = new Schema({
  meta: {
    public: { type: Boolean, required: true, default: true },
  },
  fullname: { type: String, required: true },
  description: String,
  location: { type: String, required: true },
  privacy: {
    phone: String,
    gender: { type: String, enum: ['male', 'female'] },
    age: Number,
  },
  positions: [PositionSchema],
  reference: {
    portfolio: String,
    blog: String,
    github: String,
  },
  projects: [ProjectSchema],
  author: { type: Schema.Types.ObjectId, required: true, ref: 'User' }, // one to one
});

module.exports = mongoose.model('Resume', ResumeSchema);
