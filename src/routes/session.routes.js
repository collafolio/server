const {
  checkEmailValue,
  checkDuplicateEmail,
  checkDuplicateLogin,
} = require('../middlewares/session.middleware');
const verifyUser = require('../middlewares/verifyUser');
const controller = require('../controllers/session.controller');

module.exports = (router) => {
  router.post(
    '/local_users',
    [checkEmailValue, checkDuplicateEmail],
    controller.createLocalUser,
  );
  router.post(
    '/local_login',
    [checkEmailValue, checkDuplicateLogin],
    controller.loginLocalUser,
  );
  router.post('/logout', [verifyUser], controller.logoutUser);
  router.delete('/users/:userid', [verifyUser], controller.deleteUser);
};
