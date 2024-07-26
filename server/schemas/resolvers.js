const { Profile } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return Profile.find();
    },
  },

};

module.exports = resolvers;
