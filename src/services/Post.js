const { Post } = require('../models');

exports.dropCollection = () => {
  return Post.collection.drop();
};

exports.retrieveAll = () => {
  const query = Post.find({}).populate('createdBy');
  return query.exec();
};

exports.retrieveOne = (postId) => {
  // partial update
  const query = Post.findByIdAndUpdate(postId, {
    $inc: { 'meta.visits': 1 }
  }, { new: true });

  return query.exec();
}

exports.createOne = body => {
  const post = new Post(body);
  return post.save();
};

exports.updateOne = (postId, body) => {
  // Batch request from client (No partial request)
  console.log(body);
  const { header, wanted, tags } = body;
  const query = Post.findByIdAndUpdate(
    postId,
    {
      $set: {
        header: header,
        'wanted.category': wanted.category,
        'wanted.position': wanted.position,
        'wanted.task': wanted.task,
        'wanted.number': wanted.number,
      },
      $push: {
        'wanted.requisites': wanted.requisites,
        'wanted.locations': wanted.locations,
        tags: tags,
      },
    },
    {
      upsert: true,
      new: true,
    },
  );
  return query.exec();
};

exports.deleteOne = postId => {
  const query = Post.findByIdAndDelete(postId);
  return query.exec(); // return execution result (Promise)
};

exports.deleteAll = userId => {
  const query = Post.findOneAndDelete({ author: userId });
  return query.exec();
};
