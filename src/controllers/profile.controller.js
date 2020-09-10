exports.createProfile = (req, res) => {
  res.status(201).send('Profile create success');
};

exports.updateProfile = (req, res) => {
  res.status(200).send('Profile update success');
};

exports.deleteProfile = (req, res) => {
  res.status(204).send('Profile delete success');
};
