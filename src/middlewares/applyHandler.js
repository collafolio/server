const service = require('../services/apply.service');

exports.deleteUserApplies = async (req, res, next) => {
  try {
    const result = await service.deleteAppliesByUserId(req.userId);
    console.log(result);
    next();
  } catch (err) {
    next(err);
  }
};
