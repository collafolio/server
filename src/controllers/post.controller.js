exports.getAllPosts = (req, res) => {
  res.status(200).send('Posts found');
};

exports.getPost = (req, res) => {
  res.status(200).send('Post found');
};

exports.createPost = (req, res) => {
  res.status(201).send('Post create success');
};

exports.updatePost = (req, res) => {
  res.status(200).send('Post update success');
};

exports.deletePost = (req, res) => {
  res.status(200).send('Post delete success');
};
