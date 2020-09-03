const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  positions: [{ type: String, required: true }],
  gender: String,
  age: Number,
  about: String,
});

const SpecSchema = new Schema(
  {
    portfolios: [
      {
        url: String,
      },
    ],
    projects: [
      {
        name: String,
        about: String,
        year: Number,
        position: String,
        task: String,
      },
    ],
    tools: [
      {
        name: String,
        category: String,
      },
    ],
    backgrounds: [
      {
        school: String,
        studied: String,
        entranceYear: Number,
        state: String,
      },
    ],
    certs: [
      {
        name: String,
        year: Number,
      },
    ],
    awards: [
      {
        name: String,
        year: Number,
      },
    ],
  },
  { timestamps: true },
);

// Main Document
const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    profile: ProfileSchema,
    spec: SpecSchema,
    favList: [{ type: Schema.Types.ObjectId, ref: 'Post' }], // 좋아요 누른 게시물 리스트
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
