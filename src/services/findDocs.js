const { User } = require('../models');

exports.findUserByEmail = (email) => {
  // return findOneByEmail query object and pass it into next function
  // execute passed query and return result (Promise)
  return User.findOne({ email }).exec();
};
