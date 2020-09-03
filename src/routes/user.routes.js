const { user } = require('../controllers');

module.exports = (router) => {
  router.post('/user', user.signup);
  router.delete('/user', user.signout);
};
