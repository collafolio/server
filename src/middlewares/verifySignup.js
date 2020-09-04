const { User } = require('../models');

exports.checkDuplicateEmail = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: '이미 가입된 이메일입니다.' });
      return;
    }
    next();
  });
};
