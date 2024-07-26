const mongoose = require('mongoose');
const Event = require('../models/Event');
const Player = require('../models/Player');
const Profile = require('../models/Profile');

const cleanDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/yourdbname', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected.');

    await Event.deleteMany({});
    await Player.deleteMany({});
    await Profile.deleteMany({});

    console.log('Database cleaned.');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

cleanDB();
