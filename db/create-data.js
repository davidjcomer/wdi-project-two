const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);
// Out of the db folder, into models and find post.js
const Post = require('../models/post');
const User = require('../models/user');

// Delete existing data first
Post.collection.drop();
User.collection.drop();

const userData = [{
  username: 'homerjsimpson',
  bio: 'I\'ve learnt that life is just one crushing defeat after another until you just wish that @nedflanders was dead',
  profilePicture: 'https://i.imgur.com/5c7cORq.png',
  email: 'hsimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'margesimpson',
  bio: 'The only thing I am high on is love! Love for my son and daughters. Yes, a little L.S.D. is all I need!',
  profilePicture: 'https://i.imgur.com/mnqrG94.jpg',
  email: 'msimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'bartsimpson',
  bio: 'I\'m Bart Simpson. Who the hell are you?',
  profilePicture: 'https://i.imgur.com/O70EjgE.png',
  email: 'bsimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'lisasimpson',
  bio: 'Am I the only one who just wants to play hopscotch and bake cookies and watch The McLaughlin Group?',
  profilePicture: 'https://i.imgur.com/LixSFhp.png',
  email: 'lsimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'abesimpson',
  bio: 'Dear Mr. President, there are too many states nowadays. Please eliminate three. P.S. I am not a crackpot.',
  profilePicture: 'https://i.imgur.com/itRIEhH.png',
  email: 'asimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'c.montgomeryburns',
  bio: 'Family, religion, friendship. These are the three demons you must slay if you wish to succeed in business.',
  profilePicture: 'https://i.imgur.com/vbrtXBf.png',
  email: 'cmontgomeryburns@simpstagram.com',
  password: 'pass'
}, {
  username: 'milhousevanhouten',
  bio: 'Everything\'s coming up Milhouse!',
  profilePicture: 'https://i.imgur.com/5cX7oaJ.jpg',
  email: 'mvanhouten@simpstagram.com',
  password: 'pass'
}, {
  username: 'barneygumble',
  bio: 'Uh oh, my heart just stopped..... oh, there it goes.',
  profilePicture: 'https://i.imgur.com/yeClSki.png',
  email: 'bgumble@simpstagram.com',
  password: 'pass'
}, {
  username: 'ednakrabappel',
  bio: 'I hate my job.',
  profilePicture: 'https://i.imgur.com/xdzJsjL.png',
  email: 'ekrabappel@simpstagram.com',
  password: 'pass'
},  {
  username: 'nedflandiddlyanders',
  bio: 'Hey diddly ho nieghbourinos 🙏.',
  profilePicture: 'https://i.imgur.com/Ca2VqNs.png',
  email: 'nflanders@simpstagram.com',
  password: 'pass'
}, {
  username: 'clancywiggum',
  bio: 'You know how it is with cops. I\'ll be shot three days before retirement. In the business, we call it retirony',
  profilePicture: 'https://i.imgur.com/B823QOo.jpg',
  email: 'cwiggum@simpstagram.com',
  password: 'pass'
}];


User
  .create(userData)
  .then(users => {
    console.log(`${users.length} users created!`);
    Post.create([
      {
        image: 'https://i.imgur.com/oC6QuBn.png',
        caption: 'Hehehehe I\'m a meme! What\'ve you done today AMERICA?',
        addedBy: users[0]
      },
      {
        image: 'https://i.imgur.com/U9Oh6up.png',
        caption: 'Tuesdays, am I right?',
        addedBy: users[8]
      },
      {
        image: 'https://i.imgur.com/ZCojTVu.png',
        caption: 'Halloween Snapchat filters make Mom look less terrifying.',
        addedBy: users[2]
      },
      {
        image: 'https://i.imgur.com/y81yADD.png',
        caption: 'On the local news again. No biggie.',
        addedBy: users[10]
      },
      {
        image: 'https://i.imgur.com/eAq9L85.png',
        caption: 'My Grandkids bought me the new iPhone for Christmas',
        addedBy: users[4]
      },
      {
        image: 'https://i.imgur.com/392yShF.jpg',
        caption: 'You have your heroes, I have mine',
        addedBy: users[7]
      },
      {
        image: 'https://i.imgur.com/u0ufcv6.png',
        caption: 'Left Power.',
        addedBy: users[9]
      },
      {
        image: 'https://i.imgur.com/iPj7V23.jpg',
        caption: 'Felt cute. Might delete later',
        addedBy: users[9]
      },
      {
        image: 'https://i.imgur.com/QHZNShP.png',
        caption: 'Happy Cinco de Mayo everybody',
        addedBy: users[0]
      },
      {
        image: 'https://i.imgur.com/XLCnh6i.png',
        caption: 'Community service is no cakewalk.',
        addedBy: users[10]
      },
      {
        image: 'https://i.imgur.com/XCeyem7.jpg',
        caption: 'Date Night',
        addedBy: users[8]
      },
      {
        image: 'https://i.imgur.com/FbxfDWa.png',
        caption: 'Simpson eh?',
        addedBy: users[5]
      },
      {
        image: 'https://i.imgur.com/o5MNtDU.png',
        caption: 'Oh God, don\'t look at me',
        addedBy: users[10]
      },
      {
        image: 'https://i.imgur.com/qJm9CWs.png',
        caption: 'Family photo c.1999. We haven\'t aged a day',
        addedBy: users[9]
      },
      {
        image: 'https://i.imgur.com/FNmJCD0.jpg',
        caption: 'Take Me Back.',
        addedBy: users[2]
      },
      {
        image: 'https://i.imgur.com/EcOZoVE.png',
        caption: 'Ride alongs are the best part of my job',
        addedBy: users[10]
      },
      {
        image: 'https://i.imgur.com/Q6wrQUJ.png',
        caption: '#tbt to Praiseland. God is good.',
        addedBy: users[9]
      }
    ])
      .then(result => {
        console.log(`Posted ${result.length} posts to Simpstagram!`);
        mongoose.connection.close();
      });
  });
