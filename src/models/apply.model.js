const mongoose = require('mongoose');
const { Schema } = mongoose;

const ApplySchema = new Schema(
  {
    applicant: { type: Schema.Types.ObjectId, ref: 'User' },
    applyTo: { type: Schema.Types.ObjectId, ref: 'Post' },
    contents: {
      profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
      qa: {
        motive: { type: String, required: true, trim: true },
      },
    },
    meta: {
      watched: { type: Boolean, default: false },
      accepted: { type: Boolean, default: false }, // true시 지원자 email 제공 (이후 전용 DM 채널 만들어주거나 바로 면접 진행할 수 있는 시스템 구축)
      rejected: { type: Boolean, default: false }, // 담당자가 거절 or 게시물 종료/만료시 true
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Apply', ApplySchema);
