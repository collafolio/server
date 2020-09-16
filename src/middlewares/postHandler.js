const service = require('../services/post.service');

exports.deleteUserPosts = async (req, res, next) => {
  try {
    const result = await service.deletePostsByUserId(req.userId);
    console.log(result);
    next();
  } catch (err) {
    next(err);
  }
};
