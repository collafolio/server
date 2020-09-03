const { post } = require('../controllers');

module.exports = (router) => {
  router.get('/posts', post.getAllPosts);
  router.get('/post', post.getPost);
  router.post('/post', post.createPost);
  router.patch('/post', post.updatePost);
  router.delete('/post', post.deletePost);
};
