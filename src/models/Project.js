const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    header: { type: String, required: true },
    body: { type: String, required: true },
    refs: [String],
    channel: { type: String, required: true },
    startAt: Date,
    endAt: Date,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Project', projectSchema);
