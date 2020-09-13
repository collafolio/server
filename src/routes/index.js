const router = require('express').Router();
const { authUserByParam } = require('../middlewares/authUser');

router.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});

// userid 파라미터가 들어가는 모든 엔드포인트에 대해 콜백(미들웨어) 적용
router.param('userid', authUserByParam);

require('./auth.routes')(router);
require('./user.routes')(router);
require('./profile.routes')(router);
require('./post.routes')(router);
require('./apply.routes')(router);

router.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

module.exports = router;
