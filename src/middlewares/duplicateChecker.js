const userService = require('../services/User');

exports.checkDuplicateEmail = (req, res, next) => {
  userService
    .findOneByEmail(req.body.email)
    .then(user => {
      if (user) {
        return res
          .status(409)
          .send({ status: 'error', message: 'email already exists' });
      }
      next();
    })
    .catch(next);
};

exports.checkDuplicateLogin = (req, res, next) => {
  const accessToken = req.cookies['acct'];
  if (accessToken) {
    return res
      .status(409)
      .send({ status: 'error', message: 'user already logged in' });
  }
  next();
};
