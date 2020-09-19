const resumeController = require('../controllers/resume.controller');

module.exports = router => {
  router.post('/resumes', resumeController.createResume);
  router.patch('/resumes/:resumeId', resumeController.updateResume);
  router.delete('/resumes/:resumeId', resumeController.deleteResume);
};
