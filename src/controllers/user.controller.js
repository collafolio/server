const { User } = require('../models');

exports.signup = (req, res) => {
  const user = new User({ email: req.body.email }); // create user document
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(201).send('가입 성공');
  });
};

// Delete user document
exports.signout = (req, res) => {
  res.status(200).send('user delete success');
};
