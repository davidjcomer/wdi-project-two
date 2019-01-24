const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  image: String,
  caption: String,
  time: { type: Date, default: Date.now},
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
  likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  comments: [{
    user: { type: mongoose.Schema.ObjectId, ref: 'User'},
    content: String
  }]
});

const postModel = mongoose.model('Post', postSchema);

// Export the model for use elsewhere
// This is what will arrive when we say require('this file');
module.exports = postModel;
