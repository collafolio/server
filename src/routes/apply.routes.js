const applyController = require('../controllers/apply.controller');
const authUser = require('../middlewares/authUser');

module.exports = router => {
  router.post('/applies', [authUser], applyController.createApply);
  router.patch(
    '/applies/:applyId',
    [authUser],
    applyController.updateApplyStatus,
  );
  router.delete('/applies/:applyId', [authUser], applyController.deleteApply);
};
