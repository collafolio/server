const { userController, authController } = require('../controllers');
const { validateEmail } = require('../middlewares/typeValidator');
const { checkDuplicateEmail } = require('../middlewares/duplicateChecker');
const authUser = require('../middlewares/authUser');
const deleteUserDataAll = require('../middlewares/deleteUserDataAll');

module.exports = router => {
  router.post(
    '/users',
    [authUser, validateEmail, checkDuplicateEmail, userController.createUser],
    authController.createTokens,
  );
  router.delete('/users/:userId', [authUser], deleteUserDataAll);
  router.get('/users/:userId/resume', [authUser], userController.getUserResume);
  router.get('/users/:userId/posts', [authUser], userController.getUserPosts);
  router.get(
    '/users/:userId/applications',
    [authUser],
    userController.getUserApplications,
  );
};
