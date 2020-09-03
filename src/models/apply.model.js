const mongoose = require('mongoose');
const { Schema } = mongoose;

const ApplySchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    sentTo: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    meta: {
      checked: { type: Boolean, default: false },
      accepted: { type: Boolean, default: false },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Apply', ApplySchema);
