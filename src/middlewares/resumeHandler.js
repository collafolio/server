const service = require('../services/resume.service');

exports.deleteUserResume = async (req, res, next) => {
  try {
    const result = await service.deleteResumeByUserId(req.userId);
    console.log(result);
    next();
  } catch (err) {
    next(err);
  }
};
