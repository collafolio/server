const { generateToken, verifyToken } = require('../utils/tokenUtils');

exports.verifyUser = async (req, res, next, userId) => {
  const accessToken = req.cookies['acct'];
  if (!userId) {
    return res.sendStatus(400);
  }
  if (!accessToken) {
    return res.status(401).send({
      status: 'error',
      message: 'no accesstoken provided',
    });
  }
  try {
    const decoded = await verifyToken(accessToken);
    if (decoded !== userId) {
      return res.status(422).send({
        status: 'error',
        message: 'invalid userid provided',
        data: userId,
      });
    }
    next();
  } catch (err) {
    next(err);
  }
};

// 클라이언트 접속시, 홈에서 요청되는 GET /posts 라우트의 미들웨어로 사용한다
exports.refreshToken = async (req, res, next) => {
  const accessToken = req.cookies['acct'] || null;
  const refreshToken = req.cookies['reft'] || null;
  if (!accessToken && refreshToken) {
    // 사용자가 직접 로그인한 후로부터 7일이 지나 access 토큰만 만료되어 삭제되었을 때
    try {
      const userId = await verifyToken(refreshToken);
      const freshToken = await generateToken(userId);
      req.freshToken = freshToken;
      next();
    } catch (err) {
      next(err); // Express 5부터는 err 발생시 next하지 않더라도 자동으로 에러 핸들러로 넘긴다
    }
  } else {
    /*
     * 토큰이 모두 없는 경우
     * 두 토큰이 아직 있는 경우
     * refresh 토큰만 만료되어 삭제 되었을 때
     */
    next();
  }
};
