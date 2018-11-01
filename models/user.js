const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  bio: String,
  profilePicture: { type: String, default: 'https://i.imgur.com/hIdYQy0.jpg' },
  profilesFollowing: [{ type: mongoose.Schema.ObjectId, ref: 'User'}]
});

userSchema.virtual('comments', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'comments.user'
});

userSchema.virtual('addedPosts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'addedBy'
});

//People the profile is being followed by
userSchema.virtual('numberOfFollowing')
  .get(function() {
    return this.profilesFollowing.length;
  });

//People the profile is following
userSchema.virtual('followers', {
  ref: 'User',
  localField: '_id',
  foreignField: 'profilesFollowing'
});

userSchema.set('toJSON', {
  virtuals: true
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
