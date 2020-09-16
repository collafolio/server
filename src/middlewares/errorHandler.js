exports.serverError = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ status: 'error', message: err.message });
};

exports.noRouteMatch = (req, res) => {
  res
    .status(404)
    .send({ status: 'error', message: 'no corresponding route found' });
};
