const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  eventDate: {
    type: Date,
    required: true,
  },

  eventTime: {
    type: Date,
    required: true,
  },

  venue: {
    type: String,
    required: true,
  },

  entryFee: {
    type: Number,
    required: true,
  },

  eventType: {
    type: String,
    required: true,
  },

  series: {
    type: String,
    required: false,
  },

  eventTitle: {
    type: String,
    required: false,
  },

  multiDay: {
    type: Boolean,
    required: false,
  },

  chipCount: {
    type: String,
    required: true,
  },

  levels: {
    type: String,
    required: true,
  },

  guarantee: {
    type: String,
    required: true,
    //we could create an if statement in the component iterating over each guarantee looking for 'seats' and return code that puts a $ infront of dollar values and nothing infront to 'seats'
  }

  
});

const Event = model('Event', eventSchema);

module.exports = Event;