const User = require('../../models');

const updateSpec = (req, res) => {
  console.log(req.params.id);
  res.send('successfully updated');
};

module.exports = updateSpec;
