const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  eventDate: {
    type: Date,
    required: true,
  },

  eventTime: {
    type: String,
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
  }
});

const Event = model('Event', eventSchema);

module.exports = Event;