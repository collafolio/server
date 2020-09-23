const { userController, authController } = require('../controllers');
const { verifyEmail } = require('../middlewares/typeValidator');
const { checkDuplicateEmail } = require('../middlewares/duplicateChecker');
const { verifyUser } = require('../middlewares/authHandler');
const deleteUserDataAll = require('../middlewares/deleteUserDataAll');

module.exports = router => {
  router.post(
    '/users',
    [verifyUser, verifyEmail, checkDuplicateEmail, userController.createUser],
    authController.createTokens,
  );
  router.delete('/users/:userId', [verifyUser], deleteUserDataAll);
  router.get(
    '/users/:userId/resume',
    [verifyUser],
    userController.getUserResume,
  );
  router.get('/users/:userId/posts', [verifyUser], userController.getUserPosts);
  router.get(
    '/users/:userId/applications',
    [verifyUser],
    userController.getUserApplications,
  );
};
