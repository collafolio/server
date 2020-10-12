const applyService = require('../services/Apply');

exports.createApply = (req, res) => {};

exports.updateApplyStatus = (req, res) => {
  res.status(200).end();
};

exports.deleteApply = (req, res) => {
  res.status(200).end();
};

exports.deleteUserApplies = async (req, res, next) => {
  applyService
    .deleteManyByUserId(req.params.userId)
    .then(result => {
      console.log(result);
      next();
    })
    .catch(next);
};
