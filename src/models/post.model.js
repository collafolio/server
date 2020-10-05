const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { toDateAfter } = require('../utils/dateUtils');

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  members: [
    {
      category: { type: String, required: true },
      position: { type: String, required: true },
    },
  ],
  weeks: Number,
  startAt: { type: Date, required: true },
});

const PostSchema = new Schema(
  {
    meta: {
      expired: { type: Boolean, required: true, default: false },
      closed: { type: Boolean, required: true, default: false },
      favs: { type: Number, required: true, default: 0 },
      visits: { type: Number, required: true, default: 0 },
    },
    header: { type: String, required: true },
    project: ProjectSchema,
    wanted: {
      category: { type: String, required: true },
      position: { type: String, required: true },
      task: String,
      number: { type: Number, required: true, default: 1 },
      requisites: [{ type: String, required: true }],
      meeting: [{ type: String, required: true, enum: ['online', 'offline'] }],
      location: { type: String, required: true },
    },
    tags: [{ type: String }],
    expiresAt: { type: Date, default: toDateAfter(new Date(), 7) },
    createdBy: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true },
);

PostSchema.pre('save', function (next) {
  this.meta.expired = this.expiresAt < Date.now();
  next();
});

module.exports = mongoose.model('Post', PostSchema);
