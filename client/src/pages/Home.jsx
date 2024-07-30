import React from 'react';
import { Box, Button, Grid, Image, VStack, Input, Flex, Heading, Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import backgroundImage from '../assets/images/pexels-photospublic-444964.jpg'
// import { useQuery } from '@apollo/client';
// import ProfileList from '../components/ProfileList';
// import { QUERY_PROFILES } from '../utils/queries';
// import { useHistory } from 'react-router-dom'; // Uncomment if using react-router-dom for routing

const Home = () => {
  // const history = useHistory(); // Uncomment if using react-router-dom for routing

  const handleLogin = () => {
    // history.push('/login'); // Uncomment if using react-router-dom for routing
    console.log('Navigate to Login page');
  };

  const handleSignup = () => {
    // history.push('/signup'); // Uncomment if using react-router-dom for routing
    console.log('Navigate to Signup page');
  };
  //   const { loading, data } = useQuery(QUERY_PROFILES);
  //   const profiles = data?.profiles || [];

  return (
    <main>

      <Box 
      position="relative" 
      p={10}
      _before={{
        content: `""`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      filter:"grayscale(100%)",
      zIndex: -1
      
    }}
      
        color={'white'}
        
        textAlign="center"
        boxShadow={'xl'}
      >
        

        <Heading color={'brand.eerieBlack'} borderBlock={'Background'} as="h1" size="2xl" mb={4}>
        <Card bg="rgba(255, 255, 255, 0.6)" mb={4}>
              <CardBody >
                <Text>Welcome Aces!</Text>
                <Text  fontSize="xl">
          Your ultimate guide to poker events.
        </Text>
              </CardBody>
          </Card>
        </Heading>
        
      </Box>
      <Box 
        >
          <Box position="relative" zIndex="1" bg={'brand.onyx'}>
        <Box  display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} p={4} >
          <Box filter="grayscale(0%)" bg={'brand.hunterGreen'} borderRadius={'md'} width={'300px'} p={4} boxShadow={'md'}>
            <Card mb={4}>
              <CardBody>
                <Text>Tournament #1</Text>
              </CardBody>
            </Card>
            <Card mb={4}>
              <CardBody>
                <Text>Tournament #2</Text>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Text>Tournament #3</Text>
              </CardBody>
            </Card>
          </Box>
          <Box flex={'1'} display={'flex'} justifyContent={'flex-end'}>
          <Box width="300px" bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <VStack spacing={4}>
            <Heading as="h3" size="md">Login/Signup</Heading>
            <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
            <Button colorScheme="green" onClick={handleSignup}>Signup</Button>
            <Button colorScheme="purple" size="lg">Future Button</Button>
          </VStack>
        </Box>
        </Box>
        </Box>
        </Box>
      </Box>
    </main>
  );
};


export default Home;

