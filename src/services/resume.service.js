const { Resume } = require('../models');

exports.dropCollection = () => {
  return Resume.collection.drop();
};

exports.createResume = (data) => {
  return Resume.create(data);
};

exports.updateResume = (resumeId, data) => {
  return Resume.updateOne({ _id: resumeId }, data).exec();
};

exports.deleteResumeByUserId = (userId) => {
  return Resume.deleteOne({ author: userId }).exec();
};
