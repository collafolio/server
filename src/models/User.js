const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    profile: {
      name: { type: String, required: true },
      hired: { type: Number, required: true, default: false }, // 팀에 소속되어 있고, 팀에서 구인 중이라면 true
      contact: { type: String, required: true, unique: true },
      address: { type: String, required: true },
      positions: [{ type: String, required: true }],
      gender: String,
      age: Number,
      about: String,
    },
    spec: { type: Schema.Types.ObjectId, ref: 'Spec' },
    belongTo: { type: Schema.Types.ObjectId, ref: 'Team' }, // 소속된 팀
    applyTo: [{ type: Schema.Types.ObjectId, ref: 'Post' }], // 내가 지원한 게시물 리스트
    visitors: [{ type: Schema.Types.ObjectId, ref: 'User' }], // 내 프로필을 열람한 유저 리스트
    favs: [{ type: Schema.Types.ObjectId, ref: 'Post' }], // 좋아요 누른 게시물 리스트
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', userSchema);
