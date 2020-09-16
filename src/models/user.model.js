const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    meta: {
      confirmed: { type: Boolean, required: true, default: false },
      updated: { type: Boolean, required: true, default: false },
    },
    email: { type: String, required: true, unique: true },
    social: {
      facebook: {
        id: String,
        accessToken: String,
      },
      google: {
        id: String,
        accessToken: String,
      },
    },
    resume: { type: Schema.Types.ObjectId, ref: 'Resume' }, // one to one
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }], // one to many
    applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }], // one to many
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);

// meta.updated
/*
 * 클라이언트 데이터 리패칭 판단 데이터
 * refetch api 만들고, refetch 요청 성공시 다시 updated:false로 변경하는 after-hook 만들기
 * 베타버전 배포 후, 성능을 고려해 해당 데이터 업데이트 여부로 세분화 및 해당 데이터만 refetch하는 api 만들기
 */

// notices
/*
 * 새 notice doc 추가시 여기 this.notices에 populate하고,
 * after-hook으로 this.meta.updated:true로 변경
 */
