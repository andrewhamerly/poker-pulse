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
// export const ADD_SCHEDULE = gql`
//   mutation addSchedule($userId: ID!, $events: [ID]!) {
//     addSchedule(userId: $userId, events: $events) {
//       _id
//       userId {
//         _id
//         username
//       }
//       events {
//         _id
//         eventDate
//         eventTime
//         venue
//       }
//     }
//   }
// `;

// Mutation to update a schedule
export const UPDATE_SCHEDULE = gql`
  mutation updateSchedule($_id: ID!, $events: [ID]) {
    updateSchedule(_id: $_id, events: $events) {
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

// Mutation to delete a schedule
export const DELETE_SCHEDULE = gql`
  mutation deleteSchedule($_id: ID!) {
    deleteSchedule(_id: $_id)
  }
`;

// Mutation to add an event to a schedule
export const ADD_TO_SCHEDULE = gql`
  mutation AddEventToSchedule($eventData: eventInput!) {
  addEventToSchedule(eventData: $eventData) {
    _id
    email
    hendonMob
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

export const ADD_POST = gql`
  mutation addPost($content: String!) {
    addPost(content: $content) {
      _id
      content
      createdAt
      user {
        username
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(_id: $id)
  }
`;

// We can add more mutations as needed
