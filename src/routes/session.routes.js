const middleware = require('../middlewares/sessionHandler');
const controller = require('../controllers/session.controller');
const withdraw = require('../middlewares/withdraw');

module.exports = (router) => {
  router.post(
    '/local_users',
    [
      middleware.verifyEmail,
      middleware.checkDuplicateEmail,
      middleware.createLocalUser,
    ],
    controller.loginUser,
  );
  router.post(
    '/local_login',
    [
      middleware.verifyEmail,
      middleware.checkDuplicateLogin,
      middleware.findLocalUser,
    ],
    controller.loginUser,
  );
  router.post('/users/:user_id/logout', controller.logoutUser);
  router.delete('/users/:user_id', withdraw, controller.logoutUser);
};
