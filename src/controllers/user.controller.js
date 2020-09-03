const { User } = require('../models');

// Create user document
exports.signup = (req, res) => {
  res.status(201).send('user create success');
};

// Delete user document
exports.signout = (req, res) => {
  res.status(200).send('user delete success');
};
