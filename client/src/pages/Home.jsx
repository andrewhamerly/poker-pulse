import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
// import { useQuery } from '@apollo/client';
// import ProfileList from '../components/ProfileList';
// import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];

  return (
    <main>
      <Box bg="brand.dark" color="white" p={10} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Winning
        </Heading>
        <Text fontSize="xl">
          Your ultimate guide to poker events.
        </Text>
      </Box>
      {/* <Box className="flex-row justify-center">
        <Box className="col-12 col-md-10 my-3">
          {loading ? (
            <Box>Loading...</Box>
          ) : (
            <ProfileList
              profiles={profiles}
              title="Here's the current roster of friends..."
            />
          )}
        </Box>
      </Box> */}
    </main>
  );
};

export default Home;