const mongoose = require('mongoose');
const Event = require('../models/Event');
const User = require('../models/User');
const eventSeed = require('./eventSeed.json');
const userSeed = require('./userSeed.json');

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vegas-poker-pulse', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected.');

    await Event.deleteMany({});
    await User.deleteMany({});

    // await Event.insertMany(eventSeed);
    // await User.insertMany(userSeed);

    console.log('Database seeded.');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedDB();