const verify = require('../middlewares/verify');
const { user } = require('../controllers');

module.exports = (router) => {
  router.post(
    '/user',
    [verify.checkEmailValue, verify.checkDuplicateEmail],
    user.signup,
  );
  router.delete('/user', user.signout);
};
