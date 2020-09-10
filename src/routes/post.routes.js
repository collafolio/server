const { postController } = require('../controllers');

module.exports = (router) => {
  router.get('/posts', postController.getAllPosts);
  router.get('/posts/:postid', postController.getPost);
  router.post('/posts', postController.createPost);
  router.patch('/posts/:postid', postController.updatePost);
  router.delete('/posts/:postid', postController.deletePost);
};
