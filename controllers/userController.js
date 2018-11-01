const User = require('../models/user');

function userShowRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('comments addedPosts')
    .then(user => {
      console.log(user.comments);
      res.render('profile', user);
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

// function followProfileRoute(req, res, next) {
// User
//   .findById(req.params.id)
//   .populate('comments addedPosts')
//   .then(user => {
//     console.log(user.comments);
//     res.render('profile', user);
//   })
//   .catch(err => {
//     console.log('There was an error', err);
//     next();
//   });
// }

module.exports = {
  userShowRoute: userShowRoute
  // followProfileRoute: followProfileRoute
};
