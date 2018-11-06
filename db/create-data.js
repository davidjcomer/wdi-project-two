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
  profilesFollowing: ['margesimpson'],
  email: 'hsimpson@simpstagram.com',
  password: 'pass'
}, {
  username: 'margesimpson',
  bio: 'The only thing I am high on is love! Love for my son and daughters. Yes, a little L.S.D. is all I need!',
  name: 'Marge Simpson',
  profilePicture: 'https://i.imgur.com/qHNVbc9.png',
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
  name: 'Charles Montgomery Burns',
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
  profilePicture: 'https://i.imgur.com/Nc03xnj.jpg',
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
  bio: 'Hey diddly ho neighbourinos 🙏.',
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
  bio: 'Sorry losers and haters, but my I.Q. is one of the highest - and you all know it',
  name: 'Donald J Trump',
  profilePicture: 'https://i.imgur.com/WZENBu3.png',
  location: 'Washington D.C, U.S.A',
  profession: 'President of The United States of America',
  employer: 'United States Government',
  email: 'dtrump@simpstagram.com',
  password: 'pass'
}, {
  username: 'kentbrockman',
  bio: 'I\'ve said it before and I\'ll say it again: Democracy simply doesn\'t work.',
  name: 'Kent Brockman',
  profilePicture: 'https://i.imgur.com/32IDyjg.png',
  location: 'Springfield, U.S.A',
  profession: 'Broadcaster',
  employer: 'Channel 5 News',
  email: 'kbrockman@simpstagram.com',
  password: 'pass'
}, {
  username: 'pattybouvier',
  bio: 'Some days at the DMV, we don\'t let the line move at all. We call those weekdays.',
  name: 'Patty Bouvier',
  profilePicture: 'https://i.imgur.com/L9LKpX1.png',
  location: 'Springfield, U.S.A',
  profession: 'Administrator',
  employer: 'Department of Motor Vehicles',
  email: 'pbouvier@simpstagram.com',
  password: 'pass'
}, {
  username: 'selmabouvier',
  bio: 'Driver\'s license is on me.',
  name: 'Selma Bouvier-Terwilliger-Hutz-McClure',
  profilePicture: 'https://i.imgur.com/GgMN57n.jpg',
  location: 'Springfield, U.S.A',
  profession: 'Administrator',
  employer: 'Department of Motor Vehicles',
  email: 'pbouvier@simpstagram.com',
  password: 'pass'
}, {
  username: 'jayleno',
  bio: 'Politics is just show business for ugly people.',
  name: 'Jay Leno',
  profilePicture: 'https://i.imgur.com/52isU2a.png',
  location: 'Manhattan, New York',
  profession: 'Television Personality',
  employer: 'NBC',
  email: 'jleno@simpstagram.com',
  password: 'pass'
}, {
  username: 'waylonsmithers',
  bio: 'I used to wonder why Mr. Burns hated humanity. Now I know. You open your heart and they mock your very decency.',
  name: 'Waylon Smithers',
  profilePicture: 'https://i.imgur.com/0wX1JNY.png',
  location: 'Springfeld, U.S.A',
  profession: 'Personal Assistant',
  employer: 'Springfield Nuclear Power Plant',
  email: 'wsmithers@simpstagram.com',
  password: 'pass'
}, {
  username: 'moesyszlak',
  bio: 'I used to box semi-professionally. They called me Kid Gorgeous. Later on, it was Kid Presentable. Then Kid Gruesome. And finally, Kid Moe.',
  name: 'Moe Syszlak',
  profilePicture: 'https://i.imgur.com/HHWLksG.png',
  location: 'Springfeld, U.S.A',
  profession: 'Bartender',
  employer: 'Moe\'s Tavern',
  email: 'msyszlak@simpstagram.com',
  password: 'pass'
}, {
  username: 'juliushibbert',
  bio: 'My work is no laughing matter.',
  name: 'Dr. Julius M. Hibbert, M.D',
  profilePicture: 'https://i.imgur.com/hU6ZAJE.png',
  location: 'Springfeld, U.S.A',
  profession: 'Doctor',
  employer: 'Springfield General Hospital',
  email: 'jhibbert@simpstagram.com',
  password: 'pass'
}, {
  username: 'sideshowbob',
  bio: '"Attempted murder?" Now really, what is that? Do they give a Nobel Prize for "attempted chemistry"?.',
  name: 'Dr. Robert Terwilliger, Jr.',
  profilePicture: 'https://i.imgur.com/kiBv7OT.png',
  location: 'Springfeld, U.S.A',
  profession: 'Criminal Mastermind',
  employer: 'Springfield Penetentiary',
  email: 'sbob@simpstagram.com',
  password: 'pass'
}, {
  username: 'groundskeeperwillie',
  bio: 'Willie hears ya, Willie don\'t care.',
  name: 'Dr. William MacDougal',
  profilePicture: 'https://i.imgur.com/3P0lYec.jpg',
  location: 'Springfeld, U.S.A',
  profession: 'Groundskeeper',
  employer: 'Springfield Elementary',
  email: 'gwillie@simpstagram.com',
  password: 'pass'
}, {
  username: 'rev_timothylovejoy',
  bio: 'Today\'s Christian doesn\'t think he needs God. He\'s got his Hi Fi, his boob tube, and his instant pizza pie...',
  name: 'Rev. Timothy Lovejoy',
  profilePicture: '',
  location: 'Springfeld, U.S.A',
  profession: 'Reverend',
  employer: 'First Church of Springfield',
  email: 'tlovejoy@simpstagram.com',
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
        image: 'https://i.imgur.com/hLZ7w4i.jpg',
        caption: 'Album Dropping',
        addedBy: users[9]
      },
      {
        image: 'https://i.imgur.com/y81yADD.png',
        caption: 'Yeah that\'s me on TV again. No biggie.',
        addedBy: users[10]
      },
      {
        image: 'https://i.imgur.com/U9Oh6up.png',
        caption: 'Tuesdays, am I right?',
        addedBy: users[8]
      },
      {
        image: 'https://i.imgur.com/oC6QuBn.png',
        caption: 'Hehehehe I\'m a meme! What\'ve you done today AMERICA?',
        addedBy: users[0]
      },
      {
        image: 'https://i.imgur.com/pWOkEDh.jpg',
        caption: 'If anybody needs me, I\'ll be in my room',
        addedBy: users[3]
      },
      {
        image: 'https://i.imgur.com/8qnxzTJ.png',
        caption: 'Y\'cannae beat Scottish toothpaste.',
        addedBy: users[20]
      },
      {
        image: 'https://i.imgur.com/SJlkmxW.png',
        caption: 'Fresh cut',
        addedBy: users[18]
      },
      {
        image: 'https://i.imgur.com/Eyd8xkX.jpg',
        caption: 'Before you die, perhaps you\'d like to know how I engineered my ultimate revenge.',
        addedBy: users[19]
      },
      {
        image: 'https://i.imgur.com/eAq9L85.png',
        caption: 'My grandkids bought me the new iPhone for Christmas',
        addedBy: users[4]
      },
      {
        image: 'https://i.imgur.com/rjSnnXA.png',
        caption: 'Nailed It',
        addedBy: users[17]
      },
      {
        image: 'https://i.imgur.com/392yShF.jpg',
        caption: 'You have your heroes, I have mine.',
        addedBy: users[7]
      },
      {
        image: 'https://i.imgur.com/qFQbGbn.png',
        caption: 'Recording the Late Night Show with @KrustyTheClown',
        addedBy: users[15]
      },
      {
        image: 'https://i.imgur.com/fISBFux.png',
        caption: 'I am too old for this',
        addedBy: users[12]
      },
      {
        image: 'https://i.imgur.com/vGtkBin.png',
        caption: 'The boys are in jail again. But they look so peacuful',
        addedBy: users[1]
      },
      {
        image: 'https://i.imgur.com/YsuRUcO.png',
        caption: 'Stopping by the DMV',
        addedBy: users[16]
      },
      {
        image: 'https://i.imgur.com/FbxfDWa.png',
        caption: 'Simpson eh?',
        addedBy: users[5]
      },
      {
        image: 'https://i.imgur.com/AKR7iaC.png',
        caption: 'London. What a beautiful city.',
        addedBy: users[14]
      },
      {
        image: 'https://i.imgur.com/GlY9xYW.png',
        caption: 'Idiot',
        addedBy: users[13]
      },
      {
        image: 'https://i.imgur.com/FNmJCD0.jpg',
        caption: 'Take Me Back.',
        addedBy: users[2]
      },
      {
        image: 'https://i.imgur.com/qJm9CWs.png',
        caption: 'Family photo c.1999. We haven\'t aged a day',
        addedBy: users[9]
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
        image: 'https://i.imgur.com/EcOZoVE.png',
        caption: 'Ride alongs are the best part of my job',
        addedBy: users[10]
      },
      {
        image: 'https://i.imgur.com/o5MNtDU.png',
        caption: 'Oh God, don\'t look at me',
        addedBy: users[10]
      },
      {
        image: 'https://i.imgur.com/QHZNShP.png',
        caption: 'Happy Cinco de Mayo everybody',
        addedBy: users[0]
      },
      {
        image: 'https://i.imgur.com/XCeyem7.jpg',
        caption: 'Date Night',
        addedBy: users[8]
      },
      {
        image: 'https://i.imgur.com/QOmaGRV.png',
        caption: 'This reporter says: it is time to panic',
        addedBy: users[12]
      },
      {
        image: 'https://assets.fxnetworks.com/cms/prod/2016/12/simpsonsworld_social_og_lisa_1200x1200.jpg',
        caption: 'All of Earth\'s creatures are our friends',
        addedBy: users[3]
      },
      {
        image: 'https://i.imgur.com/46svvHe.png',
        caption: 'No collusion',
        addedBy: users[11]
      },
      {
        image: 'https://i.imgur.com/ZCojTVu.png',
        caption: 'Halloween Snapchat filters make Mom look less terrifying.',
        addedBy: users[2]
      },
      {
        image: 'https://i.imgur.com/Q6wrQUJ.png',
        caption: '#tbt to Praiseland. God is good.',
        addedBy: users[9]
      },
      {
        image: 'https://i.imgur.com/Y1jzZP9.png',
        caption: 'Whatever, I tried.',
        addedBy: users[8]
      },
      {
        image: 'https://i.imgur.com/BlY6yU9.png',
        caption: 'Crooked Hillary & the Dems turned heir back on Springfield. Sad. Not me. Springfield loves me.',
        addedBy: users[11]
      },
      {
        image: 'https://i.imgur.com/JanafjQ.png',
        caption: 'I take pride in the close bond I share with all of my employees',
        addedBy: users[5]
      },
      {
        image: 'https://i.imgur.com/M7Txw8n.png',
        caption: 'I don\'t care for family gatherings.',
        addedBy: users[13]
      },
      {
        image: 'https://i.imgur.com/PVNoQjB.jpg',
        caption: 'Christ is Watching',
        addedBy: users[9]
      },
      {
        image: 'https://i.imgur.com/W4K2YnX.png',
        caption: 'Idiot',
        addedBy: users[13]
      }
    ])
      .then(result => {
        console.log(`Posted ${result.length} posts to Simpstagram!`);
        mongoose.connection.close();
      });
  });
