const userService = require('../services/User');

exports.createUser = async (req, res, next) => {
  userService
    .createWithEmail(req.body.email)
    .then(user => {
      req.user = user;
      res.status(201);
      next();
    })
    .catch(next);
};

exports.findUser = async (req, res, next) => {
  userService
    .findOneByEmail(req.body.email)
    .then(user => {
      if (!user) {
        return res
          .status(404)
          .send({ status: 'error', message: 'user not found' });
      }
      console.log(user);
      req.user = user;
      res.status(200);
      next();
    })
    .catch(next);
};

exports.deleteUser = async (req, res, next) => {
  userService
    .deleteOneByUserId(req.params.userId)
    .then(result => {
      console.log(result);
      if (result.deletedCount === 0) {
        return res
          .status(404)
          .send({ status: 'error', message: 'no user found' });
      }
      next();
    })
    .catch(next);
};

exports.getUserResume = (req, res, next) => {
  res.status(200).end();
};

exports.getUserPosts = (req, res, next) => {
  res.status(200).end();
};

exports.getUserApplications = (req, res, next) => {
  res.status(200).end();
};
