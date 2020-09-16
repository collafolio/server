const { Post } = require('../models');

exports.dropCollection = () => {
  return Post.collection.drop();
};

exports.deletePostsByUserId = (userId) => {
  return Post.deleteMany({ author: userId }).exec();
};
