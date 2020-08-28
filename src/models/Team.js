const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    hiring: { type: String, required: true, default: false }, // 구인중 ? true : false
    about: String,
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }], // 리더는 0번째 인덱스
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Team', teamSchema);
