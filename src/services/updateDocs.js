const { Profile } = require('../models');

exports.updateProfileWithValues = (values) => {
  return Profile.findOneAndUpdate(values).exec();
};
