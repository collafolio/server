const User = require('../../models');

const createSpec = (req, res) => {
  console.log(req.params.id);
  res.send('successfully created');
};

module.exports = createSpec;
