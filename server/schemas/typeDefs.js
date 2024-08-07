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
    schedule: [Event]
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
    events: [Event]!
  }

  type Post {
    _id: ID!
    user: User!
    content: String!
    createdAt: String!
    likes: Int!
    likedBy: [ID!]!
  }

  type Query {
    me: User
    users: [User]
    user(_id: ID!): User
    userPosts(userId: ID!): [Post]
    events: [Event]
    event(_id: ID!): Event
    latestEvent: Event
    nextEvents(limit: Int!): [Event]
    schedules: [Schedule]
    getSchedule: User
    posts: [Post]
    post(_id: ID!): Post
    searchEvents(
      eventDate: String,
      eventTime: String,
      venue: String,
      entryFee: Float,
      eventType: String,
      multiDay: Boolean,
      chipCount: String,
      levels: String,
      guarantee: String
    ): [Event]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(_id: ID!, username: String, email: String, password: String, userBio: String, youStake: String, hendonMob: String): Auth
    login(email: String!, password: String!): Auth

    addEventToSchedule(eventData: eventInput!): User
    updateSchedule(_id: ID!, events: [ID]): User
    removeEventFromSchedule(eventData: eventInput!): User

    addEvent(eventData: eventInput!): Event
    updateEvent(_id: ID!, eventData: eventInput!): Event
    deleteEvent(_id: ID!): Boolean

    addPost(content: String!): Post
    deletePost(_id: ID!): Boolean
    likePost(postId: ID!): Post
}

  input eventInput {
    _id: ID
    eventDate: String
    eventTime: String
    venue: String
    entryFee: Float
    eventType: String
    series: String
    eventTitle: String
    multiDay: Boolean
    chipCount: String
    levels: String
    guarantee: String
}
`;

module.exports = typeDefs;