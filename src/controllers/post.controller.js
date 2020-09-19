const postService = require('../services/Post');

exports.getAllPosts = (req, res) => {
  res.status(200).end();
};

exports.getPost = (req, res) => {
  res.status(200).end();
};

exports.createPost = (req, res) => {
  res.status(200).end();
};

exports.updatePost = (req, res) => {
  res.status(200).end();
};

exports.deletePosts = (req, res) => {
  res.status(200).end();
};

exports.deleteUserPosts = (req, res, next) => {
  postService
    .deleteManyByUserId(req.params.userId)
    .then(result => {
      console.log(result);
      next();
    })
    .catch(err => next(err));
};
