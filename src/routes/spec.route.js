const router = require('express').Router();
const { spec } = require('../controllers');

router.get('/spec/:id', spec.find);
router.post('/spec/:id', spec.create);
router.patch('/spec/:id', spec.update);

module.exports = router;
