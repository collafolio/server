const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PositionSchema = new Schema({
  category: { type: String, required: true },
  position: { type: String, required: true },
});

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  members: [PositionSchema],
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
      role: {
        position: PositionSchema,
        tasks: [String],
      },
      number: { type: Number, required: true, default: 1 },
      requisites: [{ type: String, required: true }],
      meeting: [{ type: String, required: true, enum: ['온라인', '오프라인'] }],
      location: { type: String, required: true },
    },
    until: { type: Date, required: true },
    tags: [String],
    author: { type: Schema.Types.ObjectId, required: true, ref: 'User' }, // one to one
  },
  { timestamps: true },
);

module.exports = mongoose.model('Post', PostSchema);
