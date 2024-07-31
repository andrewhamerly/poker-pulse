import React from 'react';
import { Box, Button, Grid, Image, VStack, SimpleGrid, Input, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import backgroundImage from '../assets/images/pexels-photospublic-444964.jpg';
import { motion } from 'framer-motion';
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
          filter: "grayscale(100%)",
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
              <Text fontSize="xl">
                Your ultimate guide to poker events.
              </Text>
            </CardBody>
          </Card>
        </Heading>

      </Box>
      <Box
      >
        <Box bg={'brand.onyx'}>
          <SimpleGrid columns={[1, null, 2]} spacing={6} justifyItems={'center'}>

            <Box filter="grayscale(0%)" as={motion.div} whileHover={{ scale: 1.05 }} transition={'0.3s'} bg={'brand.hunterGreen'} borderRadius={'lg'} width={'300px'} p={6} m={4} boxShadow={'lg'}>
              <Heading color={'white'} as={"h3"} size={"md"} textAlign={'center'} fontWeight={'bold'} >Checkout these upcoming tournaments!</Heading>
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

            <Box width="300px" p={6} m={4} borderRadius="lg" boxShadow="lg" bg={'brand.hunterGreen'} as={motion.div} whileHover={{ scale: 1.05 }} transition={'0.3s'} >
              <VStack spacing={6}>
                <Heading as="h3" size="lg" color={'white'}>Login/Signup</Heading>
                <Button bg={'brand.onyx'} width={'full'} color={'white'} onClick={handleLogin}>Login</Button>
                <Button bg={'brand.onyx'} width={'full'} color={'white'} onClick={handleSignup}>Signup</Button>
                <Button bg={'brand.onyx'} width={'full'} color={'white'} size="lg">Future Button</Button>
              </VStack>
            </Box>


          </SimpleGrid>
        </Box>

      </Box>
    </main>
  );
};


export default Home;

