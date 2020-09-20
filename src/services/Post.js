const { Post } = require('../models');

exports.dropCollection = () => {
  return Post.collection.drop();
};

exports.retrieve = () => {
  const query = Post.find({})
    .populate('createdBy')
    .select('-project')
    .select('createdBy._id createdBy.email'); // exclude data for card display
  return query.exec();
};

exports.retrieveOneByPostId = postId => {
  const query = Post.findById(postId);
  return query.exec();
};

exports.create = body => {
  const post = new Post(body);
  return post.save();
};

exports.updateByPostId = (postId, body) => {
  const query = Post.findByIdAndUpdate(postId, body, {
    upsert: true,
    new: true,
  });
  return query.exec();
};

exports.deleteOneByPostId = postId => {
  const query = Post.findByIdAndDelete(postId);
  return query.exec(); // return execution result (Promise)
};

exports.deleteManyByUserId = userId => {
  const query = Post.findOneAndDelete({ author: userId });
  return query.exec();
};
