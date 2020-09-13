const controller = require('../controllers/post.controller');

module.exports = (router) => {
  router.get('/posts', controller.getAllPosts);
  router.get('/posts/:postid', controller.getPost);
  router.post('/posts', controller.createPost);
  router.patch('/posts/:postid', controller.updatePost);
  router.delete('/posts/:postid', controller.deletePost);
};
