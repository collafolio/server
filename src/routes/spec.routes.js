const { spec } = require('../controllers');

module.exports = (router) => {
  router.post('/user/spec', spec.createSpec);
  router.patch('/user/spec', spec.updateSpec);
};
