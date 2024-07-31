const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    schedule: [Schedule]
    userBio: String
    youStake: String
    hendonMob: String
    posts: [Post]
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

  type Post {
    _id: ID!
    user: User!
    content: String!
    createdAt: String!
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    events: [Event]
    event(_id: ID!): Event
    schedules: [Schedule]
    schedule(_id: ID!): Schedule
    posts: [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSchedule(userId: ID!, scheduleTitle: String!, events: [ID]!): Schedule
    updateSchedule(_id: ID!, scheduleTitle: String, events: [ID]): Schedule
    deleteSchedule(_id: ID!): Boolean

    addEvent(eventDate: String!, eventTime: String!, venue: String!, entryFee: Float!, eventType: String!, series: String, eventTitle: String, multiDay: Boolean, chipCount: String!, levels: String!, guarantee: String!): Event
    updateEvent(_id: ID!, eventDate: String, eventTime: String, venue: String, entryFee: Float, eventType: String, series: String, eventTitle: String, multiDay: Boolean, chipCount: String, levels: String, guarantee: String): Event
    deleteEvent(_id: ID!): Boolean

    addPost(userId: ID!, content: String!): Post
    deletePost(_id: ID!): Boolean
  }
`;

module.exports = typeDefs;