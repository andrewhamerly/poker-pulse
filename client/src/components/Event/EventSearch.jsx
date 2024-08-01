import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_EVENTS } from '../../utils/queries';

const EventSearch = () => {
  const [searchParams, setSearchParams] = useState({
    eventDate: '',
    eventTime: '',
    venue: '',
    entryFee: '',
    eventType: '',
    multiDay: false,
    chipCount: '',
    levels: '',
    guarantee: ''
  });

  const [searchEvents, { data, loading, error }] = useLazyQuery(SEARCH_EVENTS);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchEvents({ variables: { ...searchParams } });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs here */}
      <button type="submit">Search</button>
      {/* Results display here */}
      {loading && <div>Loading...</div>}
      {error && <div>Error! {error.message}</div>}
      {data && data.searchEvents.map(event => (
        <div key={event._id}>
          {event.eventTitle} - {event.entryFee}
        </div>
      ))}
    </form>
  );
};

export default EventSearch;