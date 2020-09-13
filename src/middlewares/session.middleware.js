const service = require('../services/session.service');
const { verifyEmailValue } = require('../utils/payloadUtils');

exports.checkEmailValue = (req, res, next) => {
  const email = req.body.email;
  if (!email || !verifyEmailValue(email)) {
    return res.status(400).send({ message: 'Invalid email value' });
  }
  next();
};

exports.checkDuplicateEmail = (req, res, next) => {
  service
    .findLocalUserByEmail(req.body.email)
    .then((user) => {
      // query resolved
      if (user) {
        return res.status(400).send({ message: 'Email already exists' });
      }
      // Go next middleware or controller (main task)
      next();
    })
    .catch((error) => {
      // query rejected
      return res.status(500).send({ error });
    });
};

exports.checkDuplicateLogin = (req, res, next) => {
  const accessToken = req.cookies['x-access-token'];
  if (accessToken) {
    return res.status(401).send({ message: 'User already logged in' });
  }
  next();
};
