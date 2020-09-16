const controller = require('../controllers/post.controller');

module.exports = (router) => {
  router.get('/posts', controller.getAllPosts);
  router.get('/posts/:post_id', controller.getPost);
  router.post('/posts', controller.createPost);
  router.patch('/posts/:post_id', controller.updatePost);
  router.delete('/posts/:post_id', controller.deletePost);
};
