// Starter code for queries. We will need to fine tune these along the way

import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_EVENTS = gql`
  query getEvents {
    events {
      _id
      name
      date
      location
    }
  }
`;

// We can add more queries as needed
