const { User } = require('../models');

exports.dropCollection = () => {
  return User.collection.drop();
};

exports.createUserByEmail = (email) => {
  return User.create({ email: email }); // return Promise
};

exports.findUserByEmail = (email) => {
  return User.findOne({ email: email }).exec();
};

exports.deleteUserById = (userId) => {
  return User.deleteOne({ _id: userId }).exec();
};
