const { generateToken, verifyToken } = require('../utils/tokenUtils');

exports.verifyUser = (req, res, next, userId) => {
  // const userId = req.params.userid || req.body.id;
  const accessToken = req.cookies['accessToken'];
  if (!userId || !accessToken) {
    return res.status(400).send({
      // 값이 없을 때는 400
      status: 'error',
      message: 'neither userId or accessToken provided',
    });
  }
  verifyToken(accessToken)
    .then((decoded) => {
      // console.log('Decoded token: ', decoded);
      if (decoded !== userId) {
        return res.status(422).send({
          // 값이 invalid시 422
          status: 'error',
          message: 'invalid userId or accessToken provided',
        });
      }
      next();
    })
    .catch((err) => {
      next(err);
    });
};

// 클라이언트 접속시, 홈에서 요청되는 GET /posts 라우트의 미들웨어로 사용한다
exports.refreshToken = async (req, res, next) => {
  const accessToken = req.cookies['accessToken'] || null;
  const refreshToken = req.cookies['refreshToken'] || null;
  if (!accessToken && refreshToken) {
    // 사용자가 직접 로그인한 후로부터 7일이 지나 access 토큰만 만료되어 삭제되었을 때
    try {
      const userid = await verifyToken(refreshToken);
      const freshToken = await generateToken(userid);
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
