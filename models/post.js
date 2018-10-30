const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  image: String,
  username: String,
  caption: String,
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
  comments: [{
    username: String,
    user: { type: mongoose.Schema.ObjectId, ref: 'User'},
    content: String
  }]
});

const postModel = mongoose.model('Post', postSchema);

// Export the model for use elsewhere
// This is what will arrive when we say require('this file');
module.exports = postModel;
