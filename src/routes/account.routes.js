const {
  checkEmailValue,
  checkDuplicateEmail,
} = require('../middlewares/verifyEmail');
const { accountController } = require('../controllers');

module.exports = (router) => {
  router.post(
    '/local_register',
    [checkEmailValue, checkDuplicateEmail],
    accountController.createLocalUser,
  );
  router.post(
    '/local_login',
    [checkEmailValue],
    accountController.loginLocalUser,
  );
  router.post('/logout', accountController.logoutUser); // use authUserByBody middleware
  router.delete('/users/:userid', accountController.deleteUser);
};
