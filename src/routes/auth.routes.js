const {
  checkEmailValue,
  checkDuplicateEmail,
} = require('../middlewares/verifyEmail');
const { authController } = require('../controllers');

module.exports = (router) => {
  router.post(
    '/local_users',
    [checkEmailValue, checkDuplicateEmail],
    authController.createLocalUser,
  );
  router.post('/local_login', [checkEmailValue], authController.loginLocalUser);
  router.post('/logout', authController.logoutUser); // use authUserByBody middleware
  router.delete('/users/:userid', authController.deleteUser);
};
