const verifyUser = require('../middlewares/verifyUser');
const controller = require('../controllers/user.controller');

module.exports = (router) => {
  router.get('/users/:userid/profile', [verifyUser], controller.getUserProfile);
  router.get('/users/:userid/posts', [verifyUser], controller.getUserPosts);
  router.get('/users/:userid/applies', [verifyUser], controller.getUserApplies);
};
