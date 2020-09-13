const controller = require('../controllers/profile.controller');

module.exports = (router) => {
  router.post('/profiles', controller.createProfile);
  router.patch('/profiles/:profileid', controller.updateProfile);
  router.delete('/profiles/:profileid', controller.deleteProfile);
};
