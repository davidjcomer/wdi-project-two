const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
// Out of the db folder, into models and find post.js
const Post = require('../models/post');

// Delete existing data first
Post.collection.drop();

const postData = [
  {
    image: 'https://pbs.twimg.com/profile_images/725013638411489280/4wx8EcIA.jpg',
    username: 'homerjsimpson',
    caption: 'Deep in thought'
  },
  {
    image: 'https://marvellouscutouts.co.uk/wp-content/uploads/2017/10/Marge.jpg',
    username: 'margesimpson',
    caption: 'Felt cute, might delete later'
  },
  {
    image: 'https://letsdrawkids.com/img/drawings/179-how-to-draw-bart-simpson.png',
    username: 'bartsimpson',
    caption: 'Eat my shorts'
  }
];

Post.create(postData)
  .then(result => {
    console.log(`Posted ${result.length} posts to Simpstagram!`);
    mongoose.connection.close();
  });
