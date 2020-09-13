const { User } = require('../models');

exports.createUserWithEmail = (email) => {
  return User.create({ email });
};
