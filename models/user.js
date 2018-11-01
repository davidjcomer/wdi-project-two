const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  bio: String,
  profilePicture: { type: String, default: 'https://i.imgur.com/hIdYQy0.jpg' }
  // following: [{
  //   username: String,
  //   id: String }],
  // followedBy: [{
  //   username: String,
  //   id: String }],
  // numberOfFollowers: Number
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


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
