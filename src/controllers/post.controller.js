const postService = require('../services/Post');

exports.getAllPosts = (req, res, next) => {
  postService
    .retrieveAll()
    .then(posts => {
      return res.status(200).json(posts);
    })
    .catch(next);
};

exports.getPost = (req, res, next) => {
  postService
    .retrieveOne(req.params.postId)
    .then(post => {
      return res.status(200).json(post);
    })
    .catch(next);
};

exports.createPost = (req, res, next) => {
  postService
    .createOne(req.body)
    .then(post => {
      return res.status(201).json(post);
    })
    .catch(next);
};

exports.updatePost = (req, res, next) => {
  postService
    .updateOne(req.params.postId, req.body)
    .then(post => {
      return res.status(200).json(post);
    })
    .catch(next);
};

exports.deletePost = (req, res, next) => {
  postService
    .deleteOne(req.params.postId)
    .then(result => {
      console.log(result);
      return res.status(204).end();
    })
    .catch(next);
};

exports.deleteUserPosts = (req, res, next) => {
  postService
    .deleteAll(req.params.userId)
    .then(result => {
      console.log(result);
      next();
    })
    .catch(next);
};
