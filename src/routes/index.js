const router = require('express').Router();
const { auth, post, user } = require('../controllers');
/*
 * /api/login
 */
router.post('/login', auth.login);
/*
 * /api/logout
 */
router.post('/logout', auth.logout);
/*
 * /api/posts
 */
router.get('/posts', post.findAll);
/*
 * /api/post
 */
router.get('/post/:id', post.find);
router.post('/post', post.create);
router.patch('/post', post.update);
router.delete('/post', post.delete);
/*
 * /api/user
 */
router.get('/user', user.find);
router.post('/user', user.create);
router.delete('/user', user.delete);
/*
 * /api/user/profile
 */
router.use('/user', require('./profile.route'));
/*
 * /api/user/spec
 */
router.use('/user', require('./spec.route'));

module.exports = router;
