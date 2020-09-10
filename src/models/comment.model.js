const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReplySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  contents: { type: String, required: true },
});

const CommentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  contents: { type: String, required: true },
  replies: [ReplySchema],
});

module.exports = mongoose.model('Comment', CommentSchema);
