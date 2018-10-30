const Post = require('../models/post');

function commentCreateRoute(req, res) {
  Post.findById(req.params.postId)
  // .populate('comments.username')
    .then(post => {
      post.comments.push(req.body);
      post.save().then(() => res.redirect(`/posts/${post.id}`));
    });
}

function commentDeleteRoute(req, res) {
  Post
    .findById(req.params.postId)
    .then(post => {
      post.comments.id(req.params.commentId).remove();
      post.save().then(() => res.redirect(`/posts/${post.id}`));
    });
}

module.exports = {
  commentCreateRoute: commentCreateRoute,
  commentDeleteRoute: commentDeleteRoute
};
