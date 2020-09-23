const resumeController = require('../controllers/resume.controller');
const { verifyUser } = require('../middlewares/authHandler');

module.exports = router => {
  router.post('/resumes', [verifyUser], resumeController.createResume);
  router.patch(
    '/resumes/:resumeId',
    [verifyUser],
    resumeController.updateResume,
  );
  router.delete(
    '/resumes/:resumeId',
    [verifyUser],
    resumeController.deleteResume,
  );
};
