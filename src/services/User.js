const { User } = require('../models');

exports.dropCollection = () => {
  return User.collection.drop();
};

exports.createWithEmail = email => {
  return User.create({ email: email }); // return Promise
};

exports.findOneByEmail = email => {
  return User.findOne({ email: email }).exec();
};

exports.deleteOneByUserId = userId => {
  return User.deleteOne({ _id: userId });
};
