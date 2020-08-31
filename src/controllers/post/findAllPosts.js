const Post = require('../../models');

const findAllPosts = (req, res) => {
  console.log(req.query);
  // query.author가 존재하면, collection내 author 필드의 ObjectId가 params.id와 동일한 모든 document
  // query.author가 없다면, collection 내 모든 document
  res.send('successfully found');
};

module.exports = findAllPosts;
