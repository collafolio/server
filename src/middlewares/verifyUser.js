const { verifyToken } = require('../utils/tokenUtils');

const verifyUser = (req, res, next) => {
  const userId = req.params.userid || req.body.id;
  const accessToken = req.cookies['x-access-token'];
  if (!userId || !accessToken) {
    return res.status(400).send({ message: 'No token or No userid provided' });
  }
  verifyToken(accessToken)
    .then((decoded) => {
      console.log('Decoded token: ', decoded);
      if (decoded.id !== userId) {
        return res.status(401).send({ message: 'Incorrect token provided' });
      }
      next();
    })
    .catch((error) => {
      // when given token is expired or has incorrect value to verify
      return res.status(401).send({ error });
    });
};

module.exports = verifyUser;

// exports.authUserByParam = (req, res, next, userid) => {
//   console.log('Start authenticating user by userid');
//   const accessToken = req.cookies['x-access-token'];
//   if (!accessToken) {
//     return res.status(403).send({ message: 'No token provided' });
//   }
//   verifyToken(accessToken)
//     .then((decoded) => {
//       console.log('Decoded', decoded);
//       if (decoded !== userid) {
//         return res.status(401).send({ message: 'Incorrect token provided' });
//       }
//       next();
//     })
//     .catch((error) => {
//       // when given token is expired or has incorrect value to verify
//       return res.status(401).send({ error });
//     });
// };
