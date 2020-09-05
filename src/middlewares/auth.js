const jwt = require('jsonwebtoken');
const { secret } = require('../configs/auth.config');
const { User } = require('../models');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({ message: 'No token provided' });
  }
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Incorrect token provided' });
    }
    next();
  });
};
