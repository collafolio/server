const { User } = require('../models');

exports.createProfile = (req, res) => {
  res.status(201).send('profile create success');
};

exports.updateProfile = (req, res) => {
  res.status(201).send('profile update success');
};
