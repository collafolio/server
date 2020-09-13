const { User, Profile } = require('../models');

exports.deleteUserById = (userId) => {
  return User.findByIdAndDelete(userId).exec();
}; // make query, execute query, and return result (Promise)

exports.deleteProfileById = (profileId) => {
  return Profile.findByIdAndDelete(profileId).exec();
};

// Promise.all 이용하여 유저 관련 doc 모두 삭제
