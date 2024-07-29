const User = require('../models/user');
const Event = require('../models/event');
const Schedule = require('../models/schedule');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { _id }) => {
      return User.findById(_id);
    },
    events: async () => {
      return Event.find();
    },
    event: async (parent, { _id }) => {
      return Event.findById(_id);
    },
    schedules: async () => {
      return Schedule.find().populate('events');
    },
    schedule: async (parent, { _id }) => {
      return Schedule.findById(_id).populate('events');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user};
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addSchedule: async (parent, { userId, scheduleTitle, events }) => {
      return Schedule.create({ userId, scheduleTitle, events });
    },
    updateSchedule: async (parent, { _id, scheduleTitle, events }) => {
      return Schedule.findByIdAndUpdate(_id, { scheduleTitle, events }, { new: true });
    },
    deleteSchedule: async (parent, { _id }) => {
      await Schedule.findByIdAndDelete(_id);
      return true;
    },
  },
};

module.exports = resolvers;
