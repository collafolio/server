const { userController } = require('../controllers');

module.exports = (router) => {
  router.get('/users/:userid/profile', userController.getUserProfile);
  router.get('/users/:userid/posts', userController.getUserPosts);
  router.get('/users/:userid/applies', userController.getUserApplies);
};
