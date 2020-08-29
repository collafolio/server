const User = require('../../models');

const createProfile = (req, res) => {
  console.log(req.params.id);
  res.send('successfully created');
};

module.exports = createProfile;
