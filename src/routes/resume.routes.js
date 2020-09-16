const controller = require('../controllers/resume.controller');

module.exports = (router) => {
  router.post('/resumes', controller.createResume);
  router.patch('/resumes/:resume_id', controller.updateResume);
  router.delete('/resumes/:resume_id', controller.deleteResume);
};
