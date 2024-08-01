const User = require('../models/User');
const Event = require('../models/Event');
const Schedule = require('../models/Schedule');
const Post = require('../models/Post');
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
    latestEvent: async () => {
      return Event.findOne().sort({ eventDate: -1 });
    },
    schedules: async () => {
      return Schedule.find().populate('events');
    },
    schedule: async (parent, { _id }) => {
      return Schedule.findById(_id).populate('events');
    },
    posts: async () => {
      return Post.find().populate('user');
    },
    post: async (parent, { _id }) => {
      return Post.findById(_id).populate('user');
    },
    searchEvents: async (_, { eventDate, eventTime, venue, entryFee, eventType, multiDay, chipCount, levels, guarantee }) => {
      const query = {};
      if (eventDate) query.eventDate = eventDate;
      if (eventTime) query.eventTime = eventTime;
      if (venue) query.venue = venue;
      if (entryFee !== undefined) query.entryFee = { $lte: entryFee };
      if (eventType) query.eventType = eventType;
      if (multiDay !== undefined) query.multiDay = multiDay;
      if (chipCount) query.chipCount = chipCount;
      if (levels) query.levels = levels;
      if (guarantee) query.guarantee = guarantee;

      return Event.find(query);
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, { _id, ...args }) => {
      return User.findByIdAndUpdate(_id, args, { new: true });
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
    
    addEventToSchedule: async (parent, { eventData }, context) => {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { schedule: eventData}},
        { new: true}
      );
      
    },
    updateSchedule: async (parent, { _id, events }) => {
      return Schedule.findByIdAndUpdate(_id, { events }, { new: true });
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
    addPost: async (parent, { userId, content }) => {
      const post = await Post.create({ user: userId, content });
      return post.populate('user').execPopulate();
    },
    deletePost: async (parent, { _id }) => {
      await Post.findByIdAndDelete(_id);
      return true;
    },
  },
};

module.exports = resolvers;