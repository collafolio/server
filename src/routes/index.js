const router = require('express').Router();

router.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});

require('./auth.routes')(router);
require('./user.routes')(router);
require('./profile.routes')(router);
require('./spec.routes')(router);
require('./post.routes')(router);
require('./apply.routes')(router);

module.exports = router;
