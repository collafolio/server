const mongoose = require('mongoose');
const { Schema } = mongoose;

const recruitSchema = new Schema(
  {
    author_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    target_position: { type: String, required: true },
    target_number: { type: Number, default: 1 },
    deadline: { type: Date, required: true },
    header: { type: String, required: true },
    project_id: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    team_id: {
      type: Schema.Types.ObjectId,
      ref: 'Team',
      required: false,
    },
    resume_ids: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Resume',
        required: false,
      },
    ],
    comments: [{ body: String, date: Date }],
    meta: { likes: Number },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Recruit', recruitSchema);
