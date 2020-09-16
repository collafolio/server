const { Application } = require('../models');

exports.dropCollection = () => {
  return Application.collection.drop();
};

exports.deleteAppliesByUserId = (userId) => {
  return Application.deleteMany({ applicant: userId }).exec();
};
