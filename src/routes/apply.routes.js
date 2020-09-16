const controller = require('../controllers/apply.controller');

module.exports = (router) => {
  router.post('/applies', controller.createApplication);
  router.patch('/applies/:apply_id', controller.updateApplicationStatus);
  router.delete('/applies/:apply_id', controller.deleteApplication);
};
