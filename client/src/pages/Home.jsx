import React from 'react';
import { Box, Button, VStack, SimpleGrid, Heading, Text, Card, CardBody } from '@chakra-ui/react';
import backgroundImage from '../assets/images/pexels-photospublic-444964.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_NEXT_THREE_EVENTS } from '../utils/queries';
import FormattedDate from '../components/Schedule/formattedDate';
import FormattedTime from '../components/Schedule/formattedTime';


const Home = () => {
  const navigate = useNavigate();
  let { loading, error, data } = useQuery( GET_NEXT_THREE_EVENTS, {
    variables: {limit: 3}
  });


  const handleEventClick = (id) => {
    navigate(`/event/${id}`);
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>
  let events = data?.nextEvents || [];
  console.log(events)
  // const upcomingEvent = events;


  return (
    <main>

      <Box
        position="relative"
        p={10}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
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


        <Heading
          color={'brand.eerieBlack'}
          borderBlock={'Background'}
          size="2xl"
          mb={4}
          as={motion.h1}
          initial={{ y: -50, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          transition={{ duration: 1, delay: 1.5}}>
          <Card bg="rgba(255, 255, 255, 0.6)" mb={4}>
            <CardBody >
              <Text>Welcome Aces!</Text>
              <Text fontSize="xl">
                Your ultimate guide to poker events.
              </Text>
            </CardBody>
          </Card>
        </Heading>


        <Box
        >
          <Box >
            <SimpleGrid columns={[1, null, 3]} spacing={6} justifyItems={'center'}>
              {events.map(event => (

              
              <Box 
              key={event._id}
              filter="grayscale(0%)" 
              as={motion.div} 
              whileHover={{ scale: 1.05 }} 
              transition={'0.7s'} 
              bg={'brand.hunterGreen'} 
              borderRadius={'lg'} 
              width={'300px'} 
              p={6} 
              m={4} 
              boxShadow={'lg'}
              onClick={() => handleEventClick(event._id)} 
              cursor={'pointer'}>
                <Heading color={'white'} as={"h3"} size={"md"} textAlign={'center'} fontWeight={'bold'} >
                  Checkout this upcoming tournaments!</Heading>
                 
                  <Card  mb={4}  >
                    <CardBody>
                      <Text>Event Type: {event.eventType}</Text>
                      <Text>Entry Fee: ${event.entryFee}</Text>
                      <Text>Guarantee: {event.guarantee}</Text>
                      <Text>Chip Count: {event.chipCount}</Text>
                      <Text>Series: {event.series}</Text>
                      <Text>Title: {event.eventTitle}</Text>
                      <Text>Levels: {event.levels}</Text>
                      <Text>Venue: {event.venue}</Text>
                      <FormattedTime eventTime={event.eventTime} eventDate={event.eventDate}/><FormattedDate eventDate={event.eventDate}/>
                    </CardBody>
                  </Card>
               


              </Box>

              

            ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </main>
  );
};


export default Home;

