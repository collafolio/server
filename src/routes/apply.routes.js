const applyController = require('../controllers/apply.controller');
const { verifyUser } = require('../middlewares/authHandler');

module.exports = router => {
  router.post('/applies', [verifyUser], applyController.createApply);
  router.patch(
    '/applies/:applyId',
    [verifyUser],
    applyController.updateApplyStatus,
  );
  router.delete('/applies/:applyId', [verifyUser], applyController.deleteApply);
};
