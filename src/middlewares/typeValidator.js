const joi = require('joi');
const ObjectId = require('mongoose').Types.ObjectId;

exports.validateEmail = (req, res, next) => {
  const schema = joi.object().keys({
    email: joi.string().email().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(422).send({
      status: 'error',
      message: 'invalid request data',
    });
  }
  next();
};

exports.validatePost = (req, res, next) => {
  if (
    !ObjectId.isValid(req.params.postId) ||
    !ObjectId.isValid(req.body.createdBy)
  ) {
    return res.status(422).send({
      status: 'error',
      message: 'invalid request data',
    });
  }
  const schema = joi.object().keys({
    header: joi.string().required(),
    wanted: joi.object().keys({
      category: joi.string().required(),
      position: joi.string().required(),
      task: joi.string(),
      number: joi.number(),
      requisites: joi.array().items(joi.string().required()),
      meetings: joi.array().items(joi.string().required()),
      location: joi.string().required(),
    }),
    tags: joi.array().items(joi.string()),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(422).send({
      status: 'error',
      message: 'invalid request data',
    });
  }
  next();
};
