const User = require('../models/user');

function userShowRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate('comments addedPosts profilesFollowing followers')
    .then(user => {
      console.log('===>', user);
      res.render('profile', { user });
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function followProfile(req, res, next) {
  User
    .findById(req.params.currentUserId)
    .then(user => {
      user.profilesFollowing.push(req.params.userId);
      user.save();
      res.redirect(`/profile/${req.params.userId}`) ;
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function profilesFollowingIndex(req, res, next) {
  User
    .findById(req.params.id)
    .populate('comments addedPosts profilesFollowing followers')
    .then(user => {
      console.log('-=-=->', user);
      res.render('profilesFollowing', { user });
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

function followersIndex(req, res, next) {
  User
    .findById(req.params.id)
    .populate('comments addedPosts profilesFollowing followers')
    .then(user => {
      console.log('-=-=->', user);
      res.render('followers', { user });
    })
    .catch(err => {
      console.log('There was an error', err);
      next();
    });
}

module.exports = {
  userShowRoute: userShowRoute,
  followProfile: followProfile,
  profilesFollowingIndex: profilesFollowingIndex,
  followersIndex: followersIndex
};
