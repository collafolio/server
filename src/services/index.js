const { User } = require('../models');

exports.createUserWithEmail = (email) => {
  // make doc, save doc, and return result (Promise)
  const user = new User({ email });
  return user.save();
};

exports.findUserByEmail = (email) => {
  // return findOneByEmail query object and pass it into next function
  // execute passed query and return result (Promise)
  return User.findOne({ email }).exec();
};

exports.deleteUserById = (userid) => {
  // make query, execute query, and return result (Promise)
  return User.findByIdAndDelete(userid).exec();
};
