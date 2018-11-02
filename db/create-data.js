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
  name: 'Homer Simpson',
  profilePicture: 'https://i.imgur.com/5c7cORq.png',
  location: 'Springfield, U.S.A',
  profession: 'Nuclear Safety Inspector',
  employer: 'Springfield Nuclear Power Plant',
  email: 'hsimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'margesimpson',
  bio: 'The only thing I am high on is love! Love for my son and daughters. Yes, a little L.S.D. is all I need!',
  name: 'Marge Simpson',
  profilePicture: 'https://i.imgur.com/mnqrG94.jpg',
  location: 'Springfield, U.S.A',
  profession: 'Artist',
  employer: 'Freelance',
  email: 'msimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'bartsimpson',
  bio: 'I\'m Bart Simpson. Who the hell are you?',
  name: 'Bart Simpson',
  profilePicture: 'https://i.imgur.com/O70EjgE.png',
  location: 'Springfield, U.S.A',
  profession: 'Student',
  employer: 'Springfield Elementary',
  email: 'bsimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'lisasimpson',
  bio: 'Am I the only one who just wants to play hopscotch and bake cookies and watch The McLaughlin Group?',
  name: 'Lisa Simpson',
  profilePicture: 'https://i.imgur.com/LixSFhp.png',
  location: 'Springfield, U.S.A',
  profession: 'Student',
  employer: 'Springfield Elementary',
  email: 'lsimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'abesimpson',
  bio: 'Dear Mr. President, there are too many states nowadays. Please eliminate three. P.S. I am not a crackpot.',
  name: 'Abraham Simpson',
  profilePicture: 'https://i.imgur.com/itRIEhH.png',
  location: 'Springfield, U.S.A',
  profession: 'Retired',
  employer: 'Springfeld Retirement Home',
  email: 'asimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'c.montgomeryburns',
  bio: 'Family, religion, friendship. These are the three demons you must slay if you wish to succeed in business.',
  name: 'C. Montgomery Burns',
  profilePicture: 'https://i.imgur.com/vbrtXBf.png',
  location: 'Springfield, U.S.A',
  profession: 'CEO',
  employer: 'Springfield Nuclear Power Plant',
  email: 'cmontgomeryburns@simpstagram.com',
  password: 'pass'
}, {
  username: 'milhousevanhouten',
  bio: 'Everything\'s coming up Milhouse!',
  name: 'Milhouse Van Houten',
  profilePicture: 'https://i.imgur.com/5cX7oaJ.jpg',
  location: 'Springfield, U.S.A',
  profession: 'Student',
  employer: 'Springfield Elementary',
  email: 'mvanhouten@simpstagram.com',
  password: 'pass'
}, {
  username: 'barneygumble',
  bio: 'Uh oh, my heart just stopped..... oh, there it goes.',
  name: 'Barney Gumble',
  profilePicture: 'https://i.imgur.com/yeClSki.png',
  location: 'Springfield, U.S.A',
  profession: 'Bar Fly',
  employer: 'Moe\'s Tavern',
  email: 'bgumble@simpstagram.com',
  password: 'pass'
}, {
  username: 'ednakrabappel',
  bio: 'I hate my job.',
  name: 'Edna Krabappel',
  profilePicture: 'https://i.imgur.com/xdzJsjL.png',
  location: 'Springfield, U.S.A',
  profession: '4th Grade Teacher',
  employer: 'Springfield Elementary',
  email: 'ekrabappel@simpstagram.com',
  password: 'pass'
},  {
  username: 'nedflandiddlyanders',
  bio: 'Hey diddly ho nieghbourinos 🙏.',
  name: 'Ned Flanders',
  profilePicture: 'https://i.imgur.com/Ca2VqNs.png',
  location: 'Springfield, U.S.A',
  profession: 'Owner',
  employer: 'Leftorium',
  email: 'nflanders@simpstagram.com',
  password: 'pass'
}, {
  username: 'clancywiggum',
  bio: 'You know how it is with cops. I\'ll be shot three days before retirement. In the business, we call it retirony',
  name: 'Clancy Wiggum',
  profilePicture: 'https://i.imgur.com/B823QOo.jpg',
  location: 'Springfield, U.S.A',
  profession: 'Police Officer',
  employer: 'Springfield Police Department',
  email: 'cwiggum@simpstagram.com',
  password: 'pass'
}, {
  username: 'donaldjtrump',
  bio: 'Sorry losers and haters, but my I.Q. is one of the highest -and you all know it',
  name: 'Donald J Trump',
  profilePicture: 'https://i.imgur.com/WZENBu3.png',
  location: 'Washington D.C, U.S.A',
  profession: 'President of The United States of America',
  employer: 'United States Government',
  email: 'dtrump@simpstagram.com',
  password: 'pass'
}, {
  username: 'kentbrockman',
  bio: 'You know how it is with cops. I\'ll be shot three days before retirement. In the business, we call it retirony',
  name: 'Kent Brockman',
  profilePicture: 'https://i.imgur.com/pSt7aHT.png',
  location: 'Springfield, U.S.A',
  profession: 'Broadcaster',
  employer: 'Channel 5 News',
  email: 'kbrockman@simpstagram.com',
  password: 'pass'
}];


User
  .create(userData)
  .then(users => {
    console.log(`${users.length} users created!`);
    Post.create([
      {
        image: 'https://i.imgur.com/USSoVAc.png',
        caption: 'I qualify as not smart, but genius....and a very stable genius at that.',
        addedBy: users[11]
      },
      {
        image: 'https://i.imgur.com/y81yADD.png',
        caption: 'On the local news again. No biggie.',
        addedBy: users[10]
      },
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
        image: 'https://i.imgur.com/fISBFux.png',
        caption: 'I am too old for this',
        addedBy: users[12]
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
