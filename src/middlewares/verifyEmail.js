const { findUserByEmail } = require('../services');
const { verifyEmailValue } = require('../utils/payloadUtils');

exports.checkEmailValue = (req, res, next) => {
  const email = req.body.email;
  if (!email || !verifyEmailValue(email)) {
    return res.status(400).send({ message: 'invalid email value' });
  }
  next();
};

exports.checkDuplicateEmail = (req, res, next) => {
  findUserByEmail(req.body.email)
    .then((user) => {
      // query resolved
      if (user) {
        return res.status(400).send({ message: 'email already exists' });
      }
      // Go next middleware or controller (main task)
      next();
    })
    .catch((error) => {
      // query rejected
      return res.status(500).send({ error });
    });
};
