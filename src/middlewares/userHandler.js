const service = require('../services/user.service');

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.user_id;
  try {
    const result = service.deleteUserById(userId);
    console.log(result);
    if (result.error) {
      return res
        .status(404)
        .send({ status: 'error', message: 'no user found' });
    }
    req.userId = userId;
    next();
  } catch (err) {
    next(err);
  }
};
