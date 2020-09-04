const { verifySignup } = require('../middlewares');
const { user } = require('../controllers');

module.exports = (router) => {
  router.post('/user', [verifySignup.checkDuplicateEmail], user.signup);
  router.delete('/user', user.signout);
};
