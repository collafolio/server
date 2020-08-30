const User = require('../../models');

const findProfile = (req, res) => {
  console.log(req.params.id);
  res.send('successfully found');
};

module.exports = findProfile;
