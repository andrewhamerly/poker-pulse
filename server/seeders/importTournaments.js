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
          .pipe(csvParser({bom:true}))
          .on('data', (row) => {
            // const fullDateTime = `${row.eventDate}T${row.eventTime}`;
          
            // const eventDate = new Date(fullDateTime);
            // if (isNaN(eventDate.getTime())) {
            //   console.error(`Invalid date found in file: ${file}, Date: ${fullDateTime}`);
            //   return;
            // }
            events.push({
              eventDate: row.eventDate,
              eventTime: row.eventTime,
              venue: row.venue || 'Default Venue',
              entryFee: row.entryFee,
              eventType: row.eventType || 'Default Type',
              series: row.series || null,
              eventTitle: row.eventTitle || null,
              multiDay: row.multiDay,
              chipCount: row.chipCount || '0',
              levels: row.levels || 'Default Level',
              guarantee: row.guarantee
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