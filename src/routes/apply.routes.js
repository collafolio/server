const controller = require('../controllers/apply.controller');

module.exports = (router) => {
  router.post('/applies', controller.createApply);
  router.patch('/applies/:applyid', controller.updateApplyStatus);
  router.delete('/applies/:applyid', controller.deleteApply);
};
