const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    body: {
      wanted: {
        position: { type: String, required: true },
        number: { type: Number, required: true },
        tasks: [{ type: String, required: true }],
        requisites: [{ type: String, required: true }],
        channel: { type: String, required: true },
        location: { type: String, required: true },
      },
      project: {
        name: String,
        about: String,
        startAt: Date,
        weeks: Number,
      },
    },
    upto: { type: Date, required: true },
    meta: {
      expired: { type: Boolean, default: false },
      closed: { type: Boolean, default: false },
      favs: { type: Number, default: 0 },
      visits: { type: Number, default: 0 },
    },
    tags: [String],
    applies: [{ type: Schema.Types.ObjectId, ref: 'Apply' }],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Post', PostSchema);
