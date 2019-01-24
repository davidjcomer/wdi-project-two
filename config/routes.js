const postController = require('../controllers/postController');
const authController = require('../controllers/authController');
const commentController = require('../controllers/commentController');
const userController = require('../controllers/userController');
const secureRoute = require('../lib/secureRoute');
const router = require('express').Router();

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

router.get('/logout', authController.logoutRoute);

// Render the layout.ejs file when the user requests the home page
router.get('/', function(req, res) {
  // EJS files in a 'views' folder are the default:
  res.render('home'); // An empty object = no data
});

// Load the about page
router.get('/about', function(req, res) {
  res.render('about');
});

// PROFILE route
router.get('/profile/:id', secureRoute, userController.userShowRoute);

// INDEX Route
router.get('/posts', postController.indexRoute);

// EXPLORE Route
router.get('/explore', postController.exploreRoute);

// NEW Route: must appear above the show route, otherwise the show route will load with id = 'new'
router.get('/posts/new', secureRoute, postController.newRoute);

// Listen for POST requests to /posts
router.post('/posts', secureRoute, postController.createRoute);

// SHOW Route
router.get('/posts/:id', postController.showRoute);

// UPDATE route
router.put('/posts/:id', secureRoute, postController.updateRoute);

// EDIT route
router.get('/posts/:id/edit', secureRoute, postController.editRoute);

// DELETE Route
router.delete('/posts/:id', secureRoute, postController.deleteRoute);

// Comment CREATE route
router.post('/posts/:postId/comments', secureRoute, commentController.commentCreateRoute);

// Comment CREATE route
router.delete('/posts/:postId/comments/:commentId', secureRoute, commentController.commentDeleteRoute);

//FOLLOW ROUTE
router.post('/user/:userId/follow/:currentUserId', secureRoute, userController.followProfile);

//LIKE ROUTE:
router.post('/posts/:postId/likes/:currentUserId', secureRoute, postController.like);

//Route to show all the users who we are following
router.get('/profile/:id/profilesFollowing', secureRoute, userController.profilesFollowingIndex);

//Route to show all the users who are following us
router.get('/profile/:id/followers', secureRoute, userController.followersIndex);

//LIKE ROUTE
module.exports = router;
