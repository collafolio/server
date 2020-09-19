const applyController = require('../controllers/apply.controller');

module.exports = router => {
  router.post('/applies', applyController.createApply);
  router.patch('/applies/:applyId', applyController.updateApplyStatus);
  router.delete('/applies/:applyId', applyController.deleteApply);
};
