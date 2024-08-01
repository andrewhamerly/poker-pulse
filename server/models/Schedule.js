const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
]
});

module.exports = scheduleSchema;
