const { User } = require('../models');

exports.dropCollection = () => {
  return User.collection.drop();
};

exports.createWithEmail = email => {
  const user = new User({ email: email });
  return user.save();
};

exports.findOneByEmail = email => {
  const query = User.findOne({ email: email });
  return query.exec();
};

exports.deleteOneByUserId = userId => {
  const query = User.findByIdAndDelete(userId);
  return query.exec();
};
