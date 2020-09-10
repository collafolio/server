const { applyController } = require('../controllers');

module.exports = (router) => {
  router.post('/applies', applyController.createApply);
  router.patch('/applies/:applyid', applyController.updateApplyStatus);
  router.delete('/applies/:applyid', applyController.deleteApply);
};
