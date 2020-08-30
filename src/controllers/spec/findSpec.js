const User = require('../../models');

const findSpec = (req, res) => {
  console.log(req.params.id);
  res.send('successfully found');
};

module.exports = findSpec;
