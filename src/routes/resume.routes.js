const resumeController = require('../controllers/resume.controller');
const authUser = require('../middlewares/authUser');

module.exports = router => {
  router.post('/resumes', [authUser], resumeController.createResume);
  router.patch('/resumes/:resumeId', [authUser], resumeController.updateResume);
  router.delete(
    '/resumes/:resumeId',
    [authUser],
    resumeController.deleteResume,
  );
};
