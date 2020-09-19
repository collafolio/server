const { generateToken } = require('../utils/tokenUtils');
const msDay = 1000 * 60 * 60 * 24;

exports.createTokens = async (req, res, next) => {
  const { id, email, meta } = req.user;
  console.log(res.statusCode);
  try {
    const accessToken = await generateToken(id); // 토큰 option 설정하려면 object type으로 넣기
    const refreshToken = await generateToken(id);
    // statusCode는 이전 미들웨어에서 설정됨
    res
      .cookie('acct', accessToken, {
        httpOnly: true, // used only when http transaction - prevent XSS - document.cookie manipulation
        maxAge: msDay * 7, // reduce CSRF risk
        secure: process.env.NODE_ENV === 'production', // prevent network attack - ie. http MITM
      })
      .cookie('reft', refreshToken, {
        httpOnly: true,
        maxAge: msDay * 31,
        secure: process.env.NODE_ENV === 'production',
      })
      .send({ id, email, meta });
  } catch (err) {
    next(err);
  }
};

exports.deleteTokens = (req, res) => {
  res.status(204).clearCookie('acct').clearCookie('reft').end();
};
