import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENT_DETAILS } from '../../utils/queries';

const EventDetails = ({ eventId }) => {
  const { loading, error, data } = useQuery(GET_EVENT_DETAILS, {
    variables: { id: eventId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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