const typeValidator = require('../middlewares/typeValidator');
const duplicateChecker = require('../middlewares/duplicateChecker');
const deleteUserDataAll = require('../middlewares/deleteUserDataAll');
const { userController, authController } = require('../controllers');

module.exports = router => {
  router.post(
    '/users',
    [
      typeValidator.verifyEmail,
      duplicateChecker.checkDuplicateEmail,
      userController.createUser,
    ],
    authController.createTokens,
  );
  router.delete('/users/:userId', deleteUserDataAll);
  router.get('/users/:userId/resume', userController.getUserResume);
  router.get('/users/:userId/posts', userController.getUserPosts);
  router.get('/users/:userId/applications', userController.getUserApplications);
};
