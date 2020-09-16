const service = require('../services/user.service');
const joi = require('joi');

exports.verifyEmail = (req, res, next) => {
  const payload = req.body;
  const schema = joi.object().keys({
    email: joi.string().email().required(),
  });
  const result = schema.validate(payload);
  if (result.error) {
    return res.status(422).json({
      status: 'error',
      message: 'invalid request data',
      data: payload,
    });
  }
  next();
};

exports.checkDuplicateEmail = (req, res, next) => {
  service
    .findUserByEmail(req.body.email)
    .then((user) => {
      if (user) {
        return res
          .status(400)
          .send({ status: 'error', message: 'email already exists' });
      }
      next();
    })
    .catch((err) => {
      next(err);
    });
};

exports.checkDuplicateLogin = (req, res, next) => {
  const accessToken = req.cookies['accessToken'];
  if (accessToken) {
    return res
      .status(401)
      .send({ status: 'error', message: 'user already logged in' });
  }
  next();
};

exports.createLocalUser = (req, res, next) => {
  service
    .createUserByEmail(req.body.email)
    .then(async (user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      next(err);
    });
};

exports.findLocalUser = (req, res, next) => {
  service
    .findUserByEmail(req.body.email)
    .then(async (user) => {
      if (!user) {
        return res
          .status(404)
          .send({ status: 'error', message: 'no user found' });
      }
      req.user = user;
      next();
    })
    .catch((err) => {
      next(err);
    });
};
