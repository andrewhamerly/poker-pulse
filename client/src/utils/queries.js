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

export const SEARCH_EVENTS = gql`
  query SearchEvents($eventDate: String, $eventTime: String, $venue: String, $entryFee: Float, $eventType: String, $multiDay: Boolean, $chipCount: String, $levels: String, $guarantee: String) {
    searchEvents(eventDate: $eventDate, eventTime: $eventTime, venue: $venue, entryFee: $entryFee, eventType: $eventType, multiDay: $multiDay, chipCount: $chipCount, levels: $levels, guarantee: $guarantee) {
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
  query GetSchedule {
  getSchedule {
    _id
    email
    username
    schedule {
      _id
      chipCount
      entryFee
      eventDate
      eventTime
      eventTitle
      eventType
      guarantee
      levels
      multiDay
      series
      venue
    }
  }
}

`;

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
`;

export const GET_ME = gql`
  query getMe {
    me {
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
// We can add more queries as needed