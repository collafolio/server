const { authController, userController } = require('../controllers');
const { verifyEmail } = require('../middlewares/typeValidator');
const { checkDuplicateLogin } = require('../middlewares/duplicateChecker');
const { verifyUser } = require('../middlewares/authHandler');

module.exports = router => {
  router.post(
    '/auth', // create user auth tokens (login)
    [verifyEmail, checkDuplicateLogin, userController.findUser],
    authController.createTokens,
  );
  router.delete(
    '/auth', // delete user auth tokens (logout)
    [verifyUser],
    authController.deleteTokens,
  );
};
