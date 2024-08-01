import React from 'react';
import { Box, Button, VStack, SimpleGrid, Heading, Text, Card, CardBody } from '@chakra-ui/react';
import backgroundImage from '../assets/images/pexels-photospublic-444964.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_LATEST_EVENT } from '../utils/queries';


const Home = () => {
  const navigate = useNavigate();
  let { loading, error, data} = useQuery(GET_LATEST_EVENT);

  const handleLogin = () => {
    navigate('/login');
    console.log('Navigate to Login page');
  };

  const handleSignup = () => {
    navigate('/signup')
    console.log('Navigate to Signup page');
  };
  
  const handleEventClick = (id) => {
    navigate(`/events/${id}`);
  };

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>
  let events = data.latestEvent;
  // let events = data?.events || [];
console.log(events)
  console.log(events)
  const upcomingEvent = events;
  return (
    <main>

      <Box
        position="relative"
        p={10}
        color={'white'}
        textAlign="center"
        boxShadow={'xl'}
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
        }}>


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
              { upcomingEvent ? (
                <Card key={upcomingEvent._id} mb={4} onClick={() => handleEventClick(upcomingEvent._id)} cursor={'pointer'} >
                <CardBody>
                <Text>Event Type: {upcomingEvent.eventType}</Text>
                <Text>Entry Fee: ${upcomingEvent.entryFee}</Text>
                <Text>Guarantee: ${upcomingEvent.guarantee}</Text>
                <Text>Venue: {upcomingEvent.venue}</Text>
                <Text>Time: {upcomingEvent.eventTime}, {new Date(upcomingEvent.eventDate).toLocaleDateString()}</Text>
                </CardBody>
              </Card>
              ) : (
                <Text>No upcoming events</Text>
              )}
              {/* {events.slice(1, 4).map(event => (
                <Card key={event._id} mb={4} onClick={() => handleEventClick(event._id)} cursor={'pointer'}>
                  <CardBody>
                    <Text>{event.eventTitle}</Text>
                  </CardBody>
                </Card>
              ))} */}
              
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

