const { Apply } = require('../models');

exports.dropCollection = () => {
  return Apply.collection.drop();
};

exports.createWithBodyAndKeys = (body, keys) => {
  const apply = new Apply({
    motive: body.motive,
    resume: keys.resumeId,
    applicant: keys.userId,
    applyTo: keys.postId,
  });
  return apply.save();
};

exports.deleteManyByUserId = userId => {
  return Apply.deleteMany({ applicant: userId });
};
