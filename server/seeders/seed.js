const mongoose = require('mongoose');
const Event = require('../models/Event');
const Profile = require('../models/Profile');
const eventSeed = require('./tournamentSeed.json');
const profileSeed = require('./profileSeed.json');

const seedDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/vegas-poker-pulse', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected.');

    await Event.deleteMany({});
    await Profile.deleteMany({});

    await Event.insertMany(eventSeed);
    await Profile.insertMany(profileSeed);

    console.log('Database seeded.');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedDB();