const { profileController } = require('../controllers');

module.exports = (router) => {
  router.post('/profiles', profileController.createProfile);
  router.patch('/profiles/:profileid', profileController.updateProfile);
  router.delete('/profiles/:profileid', profileController.deleteProfile);
};
