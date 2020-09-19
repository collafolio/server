const typeValidator = require('../middlewares/typeValidator');
const duplicateChecker = require('../middlewares/duplicateChecker');
const { authController, userController } = require('../controllers');

module.exports = router => {
  router.post(
    '/auth', // create user auth tokens (login)
    [
      typeValidator.verifyEmail,
      duplicateChecker.checkDuplicateLogin,
      userController.findUser,
    ],
    authController.createTokens,
  );
  router.delete(
    '/auth', // delete user auth tokens (logout)
    authController.deleteTokens,
  );
};
