const { profile } = require('../controllers');

module.exports = (router) => {
  router.post('/user/profile', profile.createProfile);
  router.patch('/user/profile', profile.updateProfile);
};
