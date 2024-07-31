const mongoose = require('mongoose');
const Event = require('../models/Event');
const User = require('../models/User');

const seedDB = async () => {

let profileSeed = [
    {
      "username": "Chris",
      "email": "chris@example.com",
      "password": "password123",
      "bio": "A passionate poker player."
    },
    {
      "username": "John",
      "email": "john@example.com",
      "password": "password123",
      "bio": "Loves high stakes games."
    }
  ]
    
let eventSeed = [
    {
      "eventDate": new Date("2024-08-01"),
      "eventTime": new Date("2024-08-01T18:00:00"),
      "venue": "Casino Royale",
      "entryFee": 100,
      "eventType": "NLH",
      "series": "Summer Poker Championship",
      "eventTitle": "Main Event",
      "multiDay": true,
      "chipCount": "10,000",
      "levels": "20 minutes",
      "guarantee": "50,000"
    },
    {
      "eventDate": new Date("2024-08-02"),
      "eventTime": new Date("2024-08-02T12:00:00"),
      "venue": "High Stakes Club",
      "entryFee": 50,
      "eventType": "PLO",
      "series": "High Stakes Week",
      "eventTitle": "Omaha Showdown",
      "multiDay": false,
      "chipCount": "5,000",
      "levels": "15 minutes",
      "guarantee": "10,000"
    },
    {
      "eventDate": new Date("2024-08-03"),
      "eventTime": new Date("2024-08-03T14:00:00"),
      "venue": "Downtown Poker Lounge",
      "entryFee": 200,
      "eventType": "Mixed",
      "series": "Monthly Mega Tournament",
      "eventTitle": "HORSE",
      "multiDay": true,
      "chipCount": "15,000",
      "levels": "30 minutes",
      "guarantee": "100,000"
    },
    {
      "eventDate": new Date("2024-08-03"),
      "eventTime": new Date("2024-08-03T14:00:00"),
      "venue": "Downtown Poker Lounge",
      "entryFee": 200,
      "eventType": "Mixed",
      "series": "Monthly Mega Tournament",
      "eventTitle": "HORSE",
      "multiDay": true,
      "chipCount": "15,000",
      "levels": "30 minutes",
      "guarantee": "10 seats"
    }
  ]
  

  try {
    await mongoose.connect('mongodb://localhost:27017/vegas-poker-pulse', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected.');

    await Event.deleteMany({});
    await User.deleteMany({});

    await Event.create(eventSeed);
    await User.create(profileSeed);

    console.log('Database seeded.');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

seedDB();