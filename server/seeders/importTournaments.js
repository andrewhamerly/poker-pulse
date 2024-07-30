const mongoose = require('mongoose');
const fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path');

const Event = require('../models/Event');

mongoose.connect('mongodb://localhost:27017/vegas-poker-pulse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const files = ['aria.csv', 'orleans.csv'];

const importTournaments = async () => {
  try {
    const events = [];
    
    for (const file of files) {
      await new Promise((resolve, reject) => {
        fs.createReadStream(path.resolve(__dirname, `../../data/${file}`))
          .pipe(csvParser())
          .on('data', (row) => {
            events.push({
              eventDate: new Date(row.eventDate),
              eventTime: new Date(`2024-08-07T${row.eventTime}Z`),
              venue: row.venue,
              entryFee: parseFloat(row.entryFee),
              eventType: row.eventType,
              series: row.series || null,
              eventTitle: row.eventTitle || null,
              multiDay: row.multiDay === 'true',
              chipCount: row.chipCount,
              levels: row.levels,
              guarantee: row.guarantee,
            });
          })
          .on('end', resolve)
          .on('error', reject);
      });
    }

    await Event.insertMany(events);
    console.log('Events have been successfully added to the database.');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error importing events:', error);
    mongoose.connection.close();
  }
};

importTournaments();