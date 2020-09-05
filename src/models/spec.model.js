const mongoose = require('mongoose');
const { Schema } = mongoose;

const SpecSchema = new Schema(
  {
    portfolios: [
      {
        url: String,
      },
    ],
    projects: [
      {
        name: String,
        about: String,
        year: Number,
        position: String,
        task: String,
      },
    ],
    tools: [
      {
        name: String,
        category: String,
      },
    ],
    backgrounds: [
      {
        school: String,
        studied: String,
        entranceYear: Number,
        state: String,
      },
    ],
    certs: [
      {
        name: String,
        year: Number,
      },
    ],
    awards: [
      {
        name: String,
        year: Number,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Spec', SpecSchema);