const jwt = require('jsonwebtoken');
const { secret } = require('../configs/auth.config');
const { User } = require('../models');

// Authenticate & Authorize user
exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    if (!user) {
      return res.status(404).send('User not found');
    }
    const { id, email } = user;
    const accessToken = jwt.sign({ id }, secret, { expiresIn: '7d' });
    res.status(200).send({ id, email, accessToken });
  });
};

// Deauthorize user
exports.logout = (req, res) => {
  res.status(200).send('user logout success');
};
