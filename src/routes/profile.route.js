const router = require('express').Router();
const { profile } = require('../controllers');

router.get('/profile/:id', profile.find);
router.post('/profile/:id', profile.create);
router.patch('/profile/:id', profile.update);

module.exports = router;
