const { Resume } = require('../models');

exports.dropCollection = () => {
  return Resume.collection.drop();
};

exports.createWithBody = body => {
  return Resume.create(body);
};

exports.updateWithBody = (resumeId, body) => {
  return Resume.updateOne({ _id: resumeId }, body).exec();
};

exports.deleteOneByUserId = userId => {
  return Resume.deleteOne({ author: userId });
};
