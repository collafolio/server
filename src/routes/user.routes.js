const { version } = require('mongoose');
const controller = require('../controllers/user.controller');

module.exports = (router) => {
  router.get('/users/:user_id/resume', controller.getUserResume);
  router.get('/users/:user_id/posts', controller.getUserPosts);
  router.get('/users/:user_id/applications', controller.getUserApplications);
};
