const postController = require('../controllers/post.controller');

module.exports = router => {
  router.get('/posts', postController.getAllPosts);
  router.get('/posts/:postId', postController.getPost);
  router.post('/posts', postController.createPost);
  router.patch('/posts/:postId', postController.updatePost);
  router.delete('/posts/:postId', postController.deletePost);
};
