const userService = require('../services/User');

exports.createUser = async (req, res, next) => {
  try {
    const user = userService.createWithEmail(req.body.email);
    req.user = user; // 다음 핸들러로 데이터 넘기기
    res.status(201);
    next();
  } catch (err) {
    next(err);
  }
};

exports.findUser = async (req, res, next) => {
  try {
    const user = userService.findOneByEmail(req.body.email); // Promise reject는 catch에서 처리
    if (!user) {
      return res
        .status(404)
        .send({ status: 'error', message: 'user not found' });
    }
    req.user = user;
    res.status(200);
    next();
  } catch (err) {
    next(err);
  }
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
    .catch(err => next(err));
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
