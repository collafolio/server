const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    resume_id: {
      type: Schema.Types.ObjectId,
      ref: 'Resume',
      required: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', userSchema);
