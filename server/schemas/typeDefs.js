const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type User {
  _id: ID!
  username: String!
  email: String!
  schedule: [Schedule]
  userBio: String
  youStake: String
  hendonMob: String
  }

  type Event {
  _id: ID!
  eventDate: String!
  eventTime: String!
  venue: String!
  entryFee: Float!
  eventType: String!
  series: String
  eventTitle: String
  multiDay: Boolean
  chipCount: String!
  levels: String!
  guarantee: String!
  }

  type Schedule {
  _id: ID!
  userId: User!
  scheduleTitle: String!
  events: [Event]!
  }


  type Query {
  users: [Profile]
  }

`;

module.exports = typeDefs;
