const mongoose = require('mongoose');
const fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path');

const Event = require('../models/Event');

mongoose.connect('mongodb://localhost:27017/yourdbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const importTournaments = async () => {
  try {
    const events = [];
    
    fs.createReadStream(path.resolve(__dirname, '../../data/tournaments.csv'))
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
      .on('end', async () => {
        try {
          await Event.insertMany(events);
          console.log('Events have been successfully added to the database.');
          mongoose.connection.close();
        } catch (error) {
          console.error('Error inserting events:', error);
          mongoose.connection.close();
        }
      });
  } catch (error) {
    console.error('Error reading CSV file:', error);
  }
};

importTournaments();