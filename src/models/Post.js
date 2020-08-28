const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema(
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
    meta: {
      upto: Date,
      expired: Boolean,
      closed: Boolean,
      favs: Number,
    },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    applicants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ body: String }],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Post', postSchema);
