const jwt = require('jsonwebtoken');
const { auth } = require('../configs');

exports.generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, auth.jwtSecret, (err, encoded) => {
      if (err) {
        reject(err);
      }
      resolve(encoded);
    });
  });
};

exports.verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, auth.jwtSecret, (err, decoded) => {
      if (err) {
        reject(err);
      }
      resolve(decoded);
    });
  });
};
