const resumeService = require('../services/Resume');

exports.createResume = (req, res) => {
  res.status(200).end();
};

exports.updateResume = (req, res) => {
  res.status(200).end();
};

exports.deleteResume = (req, res) => {
  res.status(200).end();
};

exports.deleteUserResume = (req, res, next) => {
  resumeService
    .deleteOneByUserId(req.params.userId)
    .then(result => {
      console.log(result);
      next();
    })
    .catch(next);
};
