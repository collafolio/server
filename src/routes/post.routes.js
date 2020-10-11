const postController = require('../controllers/post.controller');
const authUser = require('../middlewares/authUser');
const { validatePost } = require('../middlewares/bodyValidator');

module.exports = router => {
  router.get('/posts', postController.getAllPosts);
  router.get('/posts/:postId', postController.getPost);
  router.post('/posts', [authUser, validatePost], postController.createPost);
  router.patch('/posts/:postId', [authUser], postController.updatePost);
  router.delete('/posts/:postId', [authUser], postController.deletePost);
};
