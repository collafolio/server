const { Post } = require('../models');

exports.dropCollection = () => {
  return Post.collection.drop();
};

exports.deleteManyByUserId = userId => {
  return Post.deleteMany({ author: userId });
};
