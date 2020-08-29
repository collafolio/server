const User = require('../../models');

const updateProfile = (req, res) => {
  console.log(req.params.id);
  res.send('successfully updated');
};

module.exports = updateProfile;
