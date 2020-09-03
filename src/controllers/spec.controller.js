const { User } = require('../models');

exports.createSpec = (req, res) => {
  res.status(201).send('spec create success');
};

exports.updateSpec = (req, res) => {
  res.status(200).send('spec update success');
};
