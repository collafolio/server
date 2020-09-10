const { verifyToken } = require('../utils/tokenUtils');

exports.authUserByParam = (req, res, next, userid) => {
  const accessToken = req.cookies['x-access-token'];
  if (!accessToken) {
    return res.status(403).send({ message: 'No token provided' });
  }
  verifyToken(accessToken)
    .then((decoded) => {
      console.log('Decoded', decoded);
      if (decoded.id !== userid) {
        return res.status(401).send({ message: 'Incorrect token provided' });
      }
      next();
    })
    .catch((error) => {
      // when given token is expired or has incorrect value to verify
      return res.status(401).send({ error });
    });
};
