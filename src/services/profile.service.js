const { Profile } = require('../models');

module.exports = {
  initProfiles: () => {},
  updateProfileWithValues: (values) => {
    return Profile.findOneAndUpdate(values).exec();
  },
  deleteProfileById: (profileId) => {
    return Profile.findByIdAndDelete(profileId).exec();
  },
};

// Promise.all 이용하여 유저 관련 doc 모두 삭제
