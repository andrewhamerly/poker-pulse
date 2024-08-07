import * as React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom'; 
import { ChakraProvider } from '@chakra-ui/react'
import { EventFilterProvider } from './contexts/EventFilterContext';
import theme from './theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <EventFilterProvider>
        <div className="flex flex-col justify-start min-h-screen">
          <Header />
          <div>
            <Outlet />
          </div>
          <Footer />
        </div>
        </EventFilterProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
