exports.getUserProfile = (req, res) => {
  res.status(200).send('User profile found');
};

exports.getUserPosts = (req, res) => {
  res.status(200).send('User posts found');
};

exports.getUserApplies = (req, res) => {
  res.status(200).send('User applies found');
};
