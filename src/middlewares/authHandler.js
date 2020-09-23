const { verifyToken } = require('../utils/tokenUtils');
const msDay = 1000 * 60 * 60 * 24;

exports.verifyUser = async (req, res, next) => {
  const userId = req.params.userId || req.body.createdBy;
  const accessToken = req.cookies['accessToken'];
  const refreshToken = req.cookies['refreshToken'];
  if (!userId) {
    return res.sendStatus(400);
  }
  // 직접 로그인한 후로부터 31일이 지나 두 토큰 모두 삭제되었을 때
  if (!accessToken && !refreshToken) {
    return res.status(401).send({
      status: 'error',
      message: 'neither auth tokens provided (login needed)',
    });
  }
  // verify refresh_token (only when refresh_token alive)
  // 직접 로그인한 후로부터 7일이 지나 access 토큰만 만료되어 삭제되었을 때
  if (!accessToken) {
    try {
      const decoded = await verifyToken(refreshToken);
      if (decoded.id !== userId) {
        return res.status(401).send({
          status: 'error',
          message: 'invalid refresh token provided',
        });
      }
      // re-generate access_token cookie with refresh_token value
      console.log('Re-generate access-token with refresh-token');
      res.cookie('accessToken', refreshToken, {
        httpOnly: true,
        maxAge: msDay * 7,
        secure: process.env.NODE_ENV === 'production',
      });
      next();
    } catch (err) {
      next(err); // Express 5부터는 err 발생시 next하지 않더라도 자동으로 에러 핸들러로 넘긴다
    }
  } else {
    // verify access_token (both tokens are alive)
    try {
      const decoded = await verifyToken(accessToken);
      if (decoded.id !== userId) {
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
  }
};
