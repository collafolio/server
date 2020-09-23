const postController = require('../controllers/post.controller');
const { verifyUser } = require('../middlewares/authHandler');

module.exports = router => {
  router.get('/posts', postController.getAllPosts);
  router.get('/posts/:postId', postController.getPost);
  router.post('/posts', [verifyUser], postController.createPost);
  router.patch('/posts/:postId', [verifyUser], postController.updatePost);
  router.delete('/posts/:postId', [verifyUser], postController.deletePost);
};
