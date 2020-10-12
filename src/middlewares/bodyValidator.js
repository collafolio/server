const joi = require('joi');
const ObjectId = require('mongoose').Types.ObjectId;

const userBodySchema = joi.object().keys({
  email: joi.string().email().required(),
});

const postBodySchema = joi.object().keys({
  header: joi.string().required(),
  wanted: joi.object().keys({
    category: joi.string().required(),
    position: joi.string().required(),
    task: joi.string(),
    number: joi.number(),
    requisites: joi.array().items(joi.string().required()),
    channels: joi.array().items(joi.string().required()),
    locations: joi.array().items(joi.string().required()),
  }),
  tags: joi.array().items(joi.string()),
  createdBy: joi.string().required(),
});

exports.validateEmail = (req, res, next) => {
  const result = userBodySchema.validate(req.body);
  if (result.error) {
    return res.status(422).send({
      status: 'error',
      message: 'invalid request body',
    });
  }
  next();
};

exports.validatePost = (req, res, next) => {
  const result = postBodySchema.validate(req.body);
  if (result.error) {
    return res.status(422).send({
      status: 'error',
      message: 'invalid request body',
    });
  }
  next();
};
