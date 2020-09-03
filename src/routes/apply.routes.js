const { apply } = require('../controllers');

module.exports = (router) => {
  router.get('/applies', apply.getAllApplies);
  router.get('/apply', apply.getApply);
  router.post('/apply', apply.createApply);
  router.patch('/apply', apply.updateApply);
  router.delete('/apply', apply.deleteApply);
};
