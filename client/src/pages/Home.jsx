import React from 'react';
import { Box, Button, VStack, SimpleGrid, Heading, Text, Card, CardBody, Spinner, AbsoluteCenter } from '@chakra-ui/react';
import backgroundImage from '../assets/images/pexels-photospublic-444964.jpg';
import AuthService from '../utils/auth';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_NEXT_THREE_EVENTS, GET_EVENTS, GET_SCHEDULE } from '../utils/queries';
import { ADD_TO_SCHEDULE, REMOVE_FROM_SCHEDULE } from '../utils/mutations'
import FormattedDate from '../components/Schedule/formattedDate';
import FormattedTime from '../components/Schedule/formattedTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faCalendarXmark } from '@fortawesome/free-solid-svg-icons';
import { useRemoveFromSchedule } from '../utils/EventAndScheduleHelpers';
import AboutCTA from '../components/About/AboutCTA';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  const navigate = useNavigate();
  let { loading, error, data } = useQuery(GET_NEXT_THREE_EVENTS, {
    variables: { limit: 3 }
  });

  const { loading: scheduleLoading, data: scheduleData } = useQuery(GET_SCHEDULE);
  const [addEventToSchedule] = useMutation(ADD_TO_SCHEDULE);
  const handleRemoveFromSchedule = useRemoveFromSchedule();

  const isLoggedIn = AuthService.loggedIn();

  const isEventInSchedule = (eventId) => {
    return userSchedule.some(event => event._id === eventId);
  }
  const handleAddToSchedule = async (event) => {
    try {
      const eventToSave = {
        _id: event._id,
        eventDate: event.eventDate,
        eventTime: event.eventTime,
        venue: event.venue,
        entryFee: event.entryFee,
        eventType: event.eventType,
        series: event.series,
        eventTitle: event.eventTitle,
        multiDay: event.multiDay,
        chipCount: event.chipCount,
        levels: event.levels,
        guarantee: event.guarantee,
      };
      await addEventToSchedule({
        variables: { eventData: eventToSave }
      });
      console.log('Event added to schedule');
    } catch (error) {
      console.error('Error adding to schedule')
    }
  }

  if (loading || scheduleLoading) return 
  <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  height="100vh"
>
  <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='hunterGreen'
    size='xl'
  />
</Box>;
  if (error) return <p>Error: {error.message}</p>
  let events = data?.nextEvents || [];
  // const upcomingEvent = events;
  const userSchedule = scheduleData?.getSchedule.schedule || []

  return (
    <>
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
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}>
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
                  cursor={'pointer'}>
                  <Heading color={'white'} as={"h3"} size={"md"} textAlign={'center'} fontWeight={'bold'} >
                    Checkout this upcoming tournament!</Heading>

                  <Card mb={4}  >
                    <CardBody>
                      <Text>Event Type: {event.eventType}</Text>
                      <Text>Entry Fee: ${event.entryFee}</Text>
                      <Text>Guarantee: {event.guarantee}</Text>
                      <Text>Chip Count: {event.chipCount}</Text>
                      <Text>Series: {event.series}</Text>
                      <Text>Title: {event.eventTitle}</Text>
                      <Text>Levels: {event.levels}</Text>
                      <Text>Venue: {event.venue}</Text>
                      <FormattedTime eventTime={event.eventTime} eventDate={event.eventDate} /><FormattedDate eventDate={event.eventDate} />
                      {isLoggedIn ? (
                        <div>
                        {isEventInSchedule(event._id) ? (
                          <button
                            className='deleteFromSchedule'
                            type='button'
                            onClick={() => handleRemoveFromSchedule(event)}
                          >
                            <span role="img" aria-label="remove from schedule">
                              <p>
                                <FontAwesomeIcon icon={faCalendarXmark} />
                              </p>
                            </span>
                          </button>
                          ) : (
                          <button
                            className='addToSchedule'
                            type='button'
                            onClick={() => handleAddToSchedule(event)}
                          >
                            <span role="img" aria-label="add to schedule">
                              <p>
                                <FontAwesomeIcon icon={faCalendarPlus} />
                              </p>
                            </span>
                          </button>
                    )}
                        </div>
                      ) : null}
                    </CardBody>
                  </Card>



                </Box>



              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </main>
    < Testimonials />
    < AboutCTA />
  </>
  );
};


export default Home;

