const { userController, authController } = require('../controllers');
const { validateEmail } = require('../middlewares/bodyValidator');
const { checkDuplicateEmail } = require('../middlewares/duplicateChecker');
const authUser = require('../middlewares/authUser');

module.exports = router => {
  router.post(
    '/users',
    [validateEmail, checkDuplicateEmail, userController.createUser],
    authController.createTokens,
  );
  // router.delete('/users/:userId', [authUser], ); // fix!
  router.get('/users/:userId/resume', [authUser], userController.getUserResume);
  router.get('/users/:userId/posts', [authUser], userController.getUserPosts);
  router.get(
    '/users/:userId/applications',
    [authUser],
    userController.getUserApplications,
  );
};
