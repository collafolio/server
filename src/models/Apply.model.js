const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ApplySchema = new Schema({
  meta: {
    watched: { type: Boolean, required: true, default: false },
    accepted: { type: Boolean, required: true, default: false }, // true시 지원자 email 제공 (이후 전용 DM 채널 만들어주거나 바로 면접 진행할 수 있는 시스템 구축)
    rejected: { type: Boolean, required: true, default: false }, // 담당자가 거절 or 게시물 종료/만료시 true
  },
  motive: { type: String, required: true },
  resume: { type: Schema.Types.ObjectId, required: true, ref: 'Resume' }, // one to one
  applicant: { type: Schema.Types.ObjectId, required: true, ref: 'User' }, // one to one
  applyTo: { type: Schema.Types.ObjectId, required: true, ref: 'Post' }, // one to one
});

module.exports = mongoose.model('Apply', ApplySchema);
