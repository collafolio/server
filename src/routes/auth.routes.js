const { auth } = require('../controllers');

module.exports = (router) => {
  router.post('/login', auth.login);
  router.post('/logout', auth.logout);
};
