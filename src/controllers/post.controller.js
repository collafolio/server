const { Post } = require('../models');

exports.createPost = (req, res) => {
  res.status(201).send('post create success');
};

exports.getPost = (req, res) => {
  res.status(200).send('one post get success');
};

exports.getAllPosts = (req, res) => {
  res.status(200).send('all posts get success');
};

exports.updatePost = (req, res) => {
  res.status(200).send('post update success');
};

exports.deletePost = (req, res) => {
  res.status(200).send('post delete success');
};
