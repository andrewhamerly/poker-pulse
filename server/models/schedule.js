const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  
  scheduleTitle: { 
    type: String,
    required: true,
  },

  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
]
});

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule;