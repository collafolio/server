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
