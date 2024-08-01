const mongoose = require('mongoose');
const fs = require('fs');
const csvParser = require('csv-parser');
const path = require('path');

const Event = require('../models/Event');

// Establish a connection to the MongoDB database
mongoose.connect('mongodb://localhost:27017/vegas-poker-pulse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const files = ['aria.csv', 'orleans.csv'];

const importTournaments = async () => {
  try {
    const events = [];
    
    // Process each file listed in the files array
    for (const file of files) {
      await new Promise((resolve, reject) => {
        fs.createReadStream(path.resolve(__dirname, `../../data/${file}`))
          .pipe(csvParser())
          .on('data', (row) => {
            // Constructing a full ISO date string to ensure correct parsing
            const fullDateTime = `${row.eventDate}T${row.eventTime}`;
          
            // Create a date object and check its validity
            const eventDate = new Date(fullDateTime);
            if (isNaN(eventDate.getTime())) {
              console.error(`Invalid date found in file: ${file}, Date: ${fullDateTime}`);
              return; // Skip this row
            }
          
            events.push({
              eventDate: row.eventDate, // Stored as string
              eventTime: row.eventTime, // Stored as string
              venue: row.venue || 'Default Venue',
              entryFee: entryFee,
              eventType: row.eventType || 'Default Type',
              series: row.series || null,
              eventTitle: row.eventTitle || null,
              multiDay: multiDay,
              chipCount: row.chipCount || '0', // Assume chip count can be a string or number
              levels: row.levels || 'Default Level',
              guarantee: guarantee
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

    // Insert all collected events into the database
    await Event.insertMany(events);
    console.log('All events have been successfully added to the database.');
  } catch (error) {
    console.error('Error importing events:', error);
  } finally {
    // Ensure the database connection is closed after processing
    mongoose.connection.close();
  }
};

importTournaments();