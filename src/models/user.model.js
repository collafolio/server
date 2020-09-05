const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
    spec: { type: Schema.Types.ObjectId, ref: 'Spec' },
    favList: [{ type: Schema.Types.ObjectId, ref: 'Post' }], // 좋아요 누른 게시물 리스트
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
