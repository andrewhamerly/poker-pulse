<<<<<<< Updated upstream
=======
// Starter code for queries. We will need to fine tune these along the way

import { gql } from '@apollo/client';

// Query to get details of a specific tournament
export const GET_EVENT_DETAILS = gql`
  query getTournamentDetails($id: ID!) {
    tournament(id: $id) {
      id
      name
      date
      location
      buyIn
      prizePool
      players {
        id
        name
      }
    }
  }
`;

// Query to get all tournaments
export const GET_EVENTS = gql`
  query getTournaments {
    tournaments {
      id
      name
      date
      location
    }
  }
`;

// Query to get user profile information
export const GET_PROFILE = gql`
  query getProfile($id: ID!) {
    profile(id: $id) {
      id
      username
      email
      tournaments {
        id
        name
      }
    }
  }
`;

// Mutation to create a new tournament
export const CREATE_EVENT = gql`
  mutation createTournament($name: String!, $date: String!, $location: String!, $buyIn: Float!, $prizePool: Float!) {
    createTournament(name: $name, date: $date, location: $location, buyIn: $buyIn, prizePool: $prizePool) {
      id
      name
    }
  }
`;

// Mutation to create a new user profile
export const CREATE_PROFILE = gql`
  mutation createProfile($username: String!, $email: String!, $password: String!) {
    createProfile(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

// Mutation to login a user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

// Mutation to update user profile
export const UPDATE_PROFILE = gql`
  mutation updateProfile($id: ID!, $username: String, $email: String, $password: String) {
    updateProfile(id: $id, username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

// We can add more queries as needed
>>>>>>> Stashed changes
