const {
  createUserWithEmail,
  deleteUserById,
} = require('../services/user.service');

exports.signup = (req, res) => {
  createUserWithEmail(req.body.email)
    .then((user) => {
      // query resolved
      if (!user) {
        return res.status(204).end();
      }
      return res.status(201).send(user);
    })
    .catch((err) => {
      // query rejected
      return res.status(500).send({ message: err });
    });
};

exports.signout = (req, res) => {
  deleteUserById(req.body.id)
    .then((user) => {
      if (!user) {
        return res.status(204).end();
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(500).send({ message: err });
    });
};
