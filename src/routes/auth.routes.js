const { authController, userController } = require('../controllers');
const { validateEmail } = require('../middlewares/typeValidator');
const { checkDuplicateLogin } = require('../middlewares/duplicateChecker');
const authUser = require('../middlewares/authUser');

module.exports = router => {
  router.post(
    '/auth', // create user auth tokens (login)
    [validateEmail, checkDuplicateLogin, userController.findUser],
    authController.createTokens,
  );
  router.delete(
    '/auth', // delete user auth tokens (logout)
    [authUser],
    authController.deleteTokens,
  );
};
