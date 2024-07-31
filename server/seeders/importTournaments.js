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
            const entryFeeCleaned = row.entryFee.replace(/[$,]/g, ''); // Remove $ and commas
            const eventDate = new Date(row.eventDate);
            const eventTime = `${row.eventDate}T${row.eventTime}:00Z`; // Combine date and time for full ISO format

            events.push({
              eventDate: eventDate,
              eventTime: new Date(eventTime), // Ensure time is correctly parsed
              venue: row.venue,
              entryFee: parseFloat(entryFeeCleaned),
              eventType: row.eventType,
              series: row.series || null,
              eventTitle: row.eventTitle || null,
              multiDay: row.multiDay.toLowerCase() === 'true', // Case insensitive check
              chipCount: parseInt(row.chipCount.replace(/,/g, '')), // Remove commas for thousands
              levels: row.levels,
              guarantee: row.guarantee.replace(/[$,]/g, ''), // Clean currency format
            });
          })
          .on('end', () => {
            console.log(`${file} processed`);
            resolve();
          })
          .on('error', (error) => {
            console.error(`Error processing ${file}:`, error);
            reject(error);
          });
      });
    }

    await Event.insertMany(events);
    console.log('All events have been successfully added to the database.');
  } catch (error) {
    console.error('Error importing events:', error);
  } finally {
    mongoose.connection.close();
  }
};

importTournaments();