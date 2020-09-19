const router = require('express').Router();
const authHandler = require('../middlewares/authHandler');
const errorHandler = require('../middlewares/errorHandler');

// userId 파라미터가 들어가는 모든 엔드포인트에 대해 미들웨어 적용
router.param('userId', authHandler.verifyUser);

require('./auth.routes')(router);
require('./user.routes')(router);
require('./resume.routes')(router);
require('./post.routes')(router);
require('./apply.routes')(router);

// 인자가 4개인 경우 override를 통해 에러 핸들링 미들웨어로 사용된다
router.use(errorHandler.serverError);

// 앞에서 라우트 주소와 매치되지 않은 모든 요청에 대해 다음 응답을 보낸다
router.use('*', errorHandler.noRouteMatch);

module.exports = router;
