const { deleteUser } = require('./userHandler');
const { deleteUserResume } = require('./resumeHandler');
const { deleteUserPosts } = require('./postHandler');
const { deleteUserApplies } = require('./applyHandler');

const withdraw = [
  deleteUser,
  deleteUserResume,
  deleteUserPosts,
  deleteUserApplies,
];

module.exports = withdraw;
