const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoticeSchema = new Schema({
  apply: { type: Schema.Types.ObjectId, ref: 'Apply' }, // apply.meta의 상태가 변경될 경우
  post: { type: Schema.Types.ObjectId, ref: 'Post' }, // post.applies에 Apply가 추가될 경우
  comment: { type: Schema.Types.ObjectId, ref: 'Comment' }, // post.comments에 Comment가 추가될 경우
  meta: {
    checked: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model('Notice', NoticeSchema);
