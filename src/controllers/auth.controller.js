const { User } = require('../models');

// Authenticate & Authorize user
exports.login = (req, res) => {
  res.status(200).send('user login success');
};

// Deauthorize user
exports.logout = (req, res) => {
  res.status(200).send('user logout success');
};
