const { Apply } = require('../models');

exports.createApply = (req, res) => {
  res.status(201).send('apply create success');
};

exports.getApply = (req, res) => {
  res.status(200).send('apply get success');
};

exports.getAllApplies = (req, res) => {
  res.status(200).send('all applies get success');
};

/* Update apply status */
exports.updateApply = (req, res) => {
  res.status(200).send('apply update success');
};

exports.deleteApply = (req, res) => {
  res.status(200).send('apply delete success');
};
