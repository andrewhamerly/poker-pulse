import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENT_DETAILS } from '../../utils/queries';
import { Spinner } from '@chakra-ui/react';

const EventDetails = ({ eventId }) => {
  const { loading, error, data } = useQuery(GET_EVENT_DETAILS, {
    variables: { _id: eventId },
  });

  if (loading) return <Box
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
  if (error) {
    console.error('Error fetching event details:', error); 
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.event) {
    return <p> No event found.</p>
  }
  const event = data.event;

  return (
    <div className="event-details">
      <h2>{event.eventTitle}</h2>
      <p>Date: {new Date(event.eventDate).toLocaleDateString()}</p>
      <p>Time: {event.eventTime}</p>
      <p>Venue: {event.venue}</p>
      <p>Entry Fee: ${event.entryFee}</p>
      <p>Guarantee: ${event.guarantee}</p>
      <p>Chip Count: {event.chipCount}</p>
      <p>Levels: {event.levels}</p>
      <p>Event Type: {event.eventType}</p>
      {event.series && <p>Series: {event.series}</p>}
      {event.multiDay && <p>Multi-Day Event</p>}
    </div>
  );
};

export default EventDetails;