const postService = require('../services/Post');
const { translateDate } = require('../utils/dateUtils');

exports.getAllPosts = (req, res, next) => {
  postService
    .retrieve()
    .then(posts => {
      return res.status(200).json(posts);
    })
    .catch(next);
};

exports.getPost = (req, res, next) => {
  postService
    .retrieveOneByPostId(req.params.postId)
    .then(post => {
      translateDate(post);
      return res.status(200).json(post);
    })
    .catch(next);
};

exports.createPost = (req, res, next) => {
  postService
    .create(req.body)
    .then(post => {
      translateDate(post);
      return res.status(201).json(post);
    })
    .catch(next);
};

exports.updatePost = (req, res, next) => {
  postService
    .updateByPostId(req.params.postId, req.body)
    .then(post => {
      translateDate(post);
      return res.status(200).json(post);
    })
    .catch(next);
};

exports.deletePost = (req, res, next) => {
  postService
    .deleteOneByPostId(req.params.postId)
    .then(result => {
      console.log(result);
      return res.status(204).end();
    })
    .catch(next);
};

exports.deleteUserPosts = (req, res, next) => {
  postService
    .deleteManyByUserId(req.params.userId)
    .then(result => {
      console.log(result);
      next();
    })
    .catch(next);
};
