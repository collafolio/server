const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    teamname: String,
    leader_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    member_ids: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    ],
    project_ids: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: false,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Team', teamSchema);
