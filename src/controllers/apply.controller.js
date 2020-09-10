exports.createApply = (req, res) => {
  res.status(201).send('Apply create success');
};

exports.updateApplyStatus = (req, res) => {
  res.status(200).send('Apply state updated');
};

exports.deleteApply = (req, res) => {
  res.status(200).send('Apply delete success');
};
