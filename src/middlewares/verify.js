const { User } = require('../models');
const verifyEmailStr = require('../utils/verifyEmailStr');

exports.checkEmailValue = (req, res, next) => {
  const email = req.body.email;
  if (!email || !verifyEmailStr(email)) {
    return res.status(400).send({ message: 'Invalid value' });
  }
  next();
};

exports.checkDuplicateEmail = (req, res, next) => {
  const email = req.body.email;
  User.findOne({ email }) // return findOneByEmail query object and pass it into next function
    .exec() // execute passed query and return result (Promise)
    .then((user) => {
      // query resolved
      if (user) {
        return res.status(400).send({ message: 'Email already exists' });
      }
      next();
    })
    .catch((err) => {
      // query rejected
      return res.status(500).send({ message: err });
    });
};
// User.findOne({ email }).exec((err, user) => {
//   if (err) {
//     return res.status(500).send({ message: err });
//   }
//   if (user) {
//     return res.status(400).send({ message: 'Email already exists' });
//   }
//   next();
// });
