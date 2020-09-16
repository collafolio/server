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
        reject(err); // 주어진 토큰의 사인된 secret이 auth.jwtSecret 값과 다를 때
      }
      resolve(decoded);
    });
  });
};
