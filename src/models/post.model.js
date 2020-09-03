const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    body: {
      wanted: {
        position: String,
        number: Number,
        tasks: [String],
        requisites: [String],
        channel: String,
        location: String,
      },
      project: {
        name: String,
        about: String,
      },
    },
    comments: [{ body: String }],
    meta: {
      upto: Date,
      expired: Boolean,
      closed: Boolean,
      favs: Number,
      visits: Number,
    },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    applies: { type: Schema.Types.ObjectId, ref: 'Apply' },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Post', PostSchema);
