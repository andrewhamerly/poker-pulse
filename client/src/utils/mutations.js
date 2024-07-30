// This is a mutations starter. Feel free to edit and update as needed

import { gql } from '@apollo/client';

// Mutation to login a user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Mutation to add a new user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Mutation to add a new schedule
export const ADD_SCHEDULE = gql`
  mutation addSchedule($userId: ID!, $scheduleTitle: String!, $events: [ID]!) {
    addSchedule(userId: $userId, scheduleTitle: $scheduleTitle, events: $events) {
      _id
      userId {
        _id
        username
      }
      scheduleTitle
      events {
        _id
        eventDate
        eventTime
        venue
      }
    }
  }
`;

// Mutation to update a schedule
export const UPDATE_SCHEDULE = gql`
  mutation updateSchedule($_id: ID!, $scheduleTitle: String, $events: [ID]) {
    updateSchedule(_id: $_id, scheduleTitle: $scheduleTitle, events: $events) {
      _id
      userId {
        _id
        username
      }
      scheduleTitle
      events {
        _id
        eventDate
        eventTime
        venue
      }
    }
  }
`;

// Mutation to delete a schedule
export const DELETE_SCHEDULE = gql`
  mutation deleteSchedule($_id: ID!) {
    deleteSchedule(_id: $_id)
  }
`;

// Mutation to add an event to a schedule
export const ADD_TO_SCHEDULE = gql`
  mutation addToSchedule($eventId: ID!) {
    addToSchedule(eventId: $eventId) {
      _id
      userId
      scheduleTitle
      events {
        _id
        eventDate
        eventTime
      }
    }
  }
`;
// We can add more mutations as needed
