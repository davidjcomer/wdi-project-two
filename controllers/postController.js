const Post = require('../models/post');


function indexRoute(req, res, next) {
  // Find all the posts, then render an ejs file:
  // Find returns an array
  Post
    .find()
    .populate('addedBy')
    .then(function(result) {
      const postObject = {
        posts: result
      };
      console.log('----->', result);
      res.render('posts/index', postObject);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}
function exploreRoute(req, res, next) {
  // Find all the posts, then render an ejs file:
  // Find returns an array
  Post
    .find()
    .populate('addedBy')
    .then(function(result) {
      const postObject = {
        posts: result
      };
      console.log('----->', result);
      res.render('posts/explore', postObject);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function newRoute(req, res, next) {
  res.render('posts/new');
  next();
}

function createRoute(req, res, next) {
  Post
    .create(req.body)
    .then(result => res.redirect(`/posts/${result._id}`))
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function showRoute(req, res, next) {
  // Get a post out of the database, using its ID
  // Get a particular post then render an ejs file
  Post
    .findById(req.params.id)
    .populate('comments.user addedBy')
    .then(result => {
      console.log('-=-=->', result);
      res.render('posts/show', result);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function updateRoute(req, res, next) {
  // req.params.id is the id of the post we are trying to update
  console.log(`Updating post id ${req.params.id}`, req.body);
  // Let's update the database using the model and the new data:
  Post
    .findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.redirect(`/posts/${result._id}`))
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function editRoute(req, res, next) {
  // First get the post from the database
  // findById returns an object, so we can hand it straight
  // into the EJS file.
  Post
    .findById(req.params.id)
    .then(result => {
      res.render('posts/edit', result);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function deleteRoute(req, res, next) {
  Post
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/posts'))
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

module.exports = {
  indexRoute: indexRoute,
  exploreRoute: exploreRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
