const User = require('../models/User');
const Event = require('../models/Event');
const Schedule = require('../models/Schedule');
const Post = require('../models/Post');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }
      return await User.findById(context.user._id);
    },
    users: async (parent, args, context) => {
      if (context.user) {
        return User.find();
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    user: async (parent, { _id }, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    events: async (parent, args, context) => {
      if (context.user) {
        return Event.find();
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    event: async (parent, { _id }, context) => {
      if (context.user) {
        return Event.findById(_id);
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    latestEvent: async () => {
        return Event.findOne().sort({ eventDate: -1 });
    },
    schedules: async (parent, args, context) => {
      if (context.user) {
        return Schedule.find().populate('events');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    schedule: async (parent, { _id }, context) => {
      if (context.user) {
        return Schedule.findById(_id).populate('events');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    posts: async (parent, args, context) => {
      if (context.user) {
        return Post.find().populate('user');
      }
      throw new AuthenticationError('You need to be logged in!');
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
    updateUser: async (parent, { _id, ...args }, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(_id, args, { new: true });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    
    addEventToSchedule: async (parent, args, context) => {
    // if (context.user) {
      return User.findOneAndUpdate(  
        { _id: context.user._id },
        { $addToSet: { schedule: args.eventData}},
        { new: true}
      ).populate('schedule');
    // }
  
    },
    updateSchedule: async (parent, { _id, scheduleTitle, events }, context) => {
      if (context.user) {
        return Schedule.findByIdAndUpdate(_id, { scheduleTitle, events }, { new: true });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteSchedule: async (parent, { _id }, context) => {
      if (context.user) {
        await Schedule.findByIdAndDelete(_id);
        return true;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addEvent: async (parent, args, context) => {
      if (context.user) {
        return Event.create(args);
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updateEvent: async (parent, { _id, ...args }, context) => {
      if (context.user) {
        return Event.findByIdAndUpdate(_id, args, { new: true });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deleteEvent: async (parent, { _id }, context) => {
      if (context.user) {
        await Event.findByIdAndDelete(_id);
        return true;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addPost: async (parent, { content }, context) => {
      if (context.user) {
        const post = await Post.create({ user: context.user._id, content });
        User.findOneAndUpdate(  
          { _id: context.user._id },
          { $addToSet: { post: post}},
          { new: true}
        )
        console.log(context.user);
        return post.populate('user');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    deletePost: async (parent, { _id }, context) => {
      if (context.user) {
        await Post.findByIdAndDelete(_id);
        return true;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;