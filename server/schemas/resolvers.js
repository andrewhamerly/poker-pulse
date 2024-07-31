const User = require('../models/User');
const Event = require('../models/Event');
const Schedule = require('../models/Schedule');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

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
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
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

    addEvent: async (parent, args) => {
      return Event.create(args);
    },
    updateEvent: async (parent, { _id, ...args }) => {
      return Event.findByIdAndUpdate(_id, args, { new: true });
    },
    deleteEvent: async (parent, { _id }) => {
      await Event.findByIdAndDelete(_id);
      return true;
    },
  },
};

module.exports = resolvers;