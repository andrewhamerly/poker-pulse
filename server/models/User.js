const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must be a valid email address!'],
  },

  password: {
    type: String,
    required: true,
    minlenth: 6,
  },

  schedule: [
    {
      type: Schema.Types.ObjectId,
      ref: "Schedule"
    }
  ],

  userBio: {
    type: String,
    required: false,
  },

  youStake: {
    type: String,
    required: false,
    match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, 'Must be a valid URL!']
  },

  hendonMob: {
    type: String,
    required: false,
    match: [/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, 'Must be a valid URL!']
  }
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;