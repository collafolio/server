const {
  userController,
  authController,
  resumeController,
  postController,
  applyController,
} = require('../controllers');

const deleteUserDataAll = [
  userController.deleteUser,
  resumeController.deleteUserResume,
  postController.deleteUserPosts,
  applyController.deleteUserApplies,
  authController.deleteTokens,
];

module.exports = deleteUserDataAll;

/*
    유저 삭제 ->
    유저 id로 유저 이력서 삭제 ->
    유저 id로 유저 게시물 삭제 ->
    유저 id로 유저 지원서 삭제 ->
    인증 토큰 삭제
*/
