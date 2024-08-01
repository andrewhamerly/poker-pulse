// Starter code for queries. We will need to fine tune these along the way

import { gql } from '@apollo/client';

// Query to get details of a specific tournament

export const GET_EVENT_DETAILS = gql`
  query getEventDetails($id: ID!) {
    event(_id: $id) {
      _id
      eventDate
      eventTime
      venue
      entryFee
      eventType
      series
      eventTitle
      multiDay
      chipCount
      levels
      guarantee
    }
  }
`;

// Query to get all tournaments

export const GET_EVENTS = gql`
  query getEvents {
    events {
      _id
      eventDate
      eventTime
      venue
      entryFee
      eventType
      series
      eventTitle
      multiDay
      chipCount
      levels
      guarantee
    }
  }
`;

// Query to get all users
export const GET_USERS = gql`
  query getUsers {
    users {
      _id
      username
      email
      schedule {
        _id
        scheduleTitle
      }
      userBio
      youStake
      hendonMob
    }
  }
`;

//Query to get a specific user by ID
export const GET_USER = gql`
  query getUser($_id: ID!) {
    user(_id: $_id) {
      _id
      username
      email
      schedule {
        _id
        scheduleTitle
      }
      userBio
      youStake
      hendonMob
    }
  }
`;

//Query to get all schedules
export const GET_SCHEDULES = gql`
  query getSchedules {
    schedules {
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

//Query to get a specific Schedule by ID
export const GET_SCHEDULE = gql`
  query getSchedule($_id: ID!) {
    schedule(_id: $_id) {
      _id
      userId {
        _id
        username
      }
      events {
        _id
        eventDate
        eventTime
        venue
      }
    }
  }
`;

<<<<<<< Updated upstream
export const GET_POSTS = gql`
  query getPosts {
    posts {
      _id
      content
      createdAt
      user {
        username
      }
    }
  }
`;

export const GET_POST = gql`
  query getPost($id: ID!) {
    post(_id: $id) {
      _id
      content
      createdAt
      user {
        username
      }
    }
  }
`;

=======
export const GET_LATEST_EVENT = gql`
query Events {
  latestEvent {
    _id
    eventDate
    eventTime
    venue
    entryFee
    eventType
    series
    eventTitle
    multiDay
    chipCount
    levels
    guarantee
  }
}
`
>>>>>>> Stashed changes
// We can add more queries as needed