import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
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

  const { data, loading, error } = useQuery(SEARCH_EVENTS, {
    variables: { ...searchParams }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="eventDate"
        type="date"
        value={searchParams.eventDate}
        onChange={handleChange}
      />
      <input
        name="eventTime"
        type="time"
        value={searchParams.eventTime}
        onChange={handleChange}
      />
      <input
        name="venue"
        type="text"
        placeholder="Venue"
        value={searchParams.venue}
        onChange={handleChange}
      />
      <input
        name="entryFee"
        type="number"
        placeholder="Max Entry Fee"
        value={searchParams.entryFee}
        onChange={handleChange}
      />
      <input
        name="eventType"
        type="text"
        placeholder="Event Type"
        value={searchParams.eventType}
        onChange={handleChange}
      />
      <label>
        MultiDay:
        <input
          name="multiDay"
          type="checkbox"
          checked={searchParams.multiDay}
          onChange={handleChange}
        />
      </label>
      <input
        name="chipCount"
        type="number"
        placeholder="Chip Count"
        value={searchParams.chipCount}
        onChange={handleChange}
      />
      <input
        name="levels"
        type="text"
        placeholder="Levels"
        value={searchParams.levels}
        onChange={handleChange}
      />
      <input
        name="guarantee"
        type="text"
        placeholder="Guarantee"
        value={searchParams.guarantee}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
      {/* Display search results */}
      {data && data.searchEvents.map((event, index) => (
        <div key={index}>
          {event.title} - {event.entryFee}
        </div>
      ))}
    </form>
  );
};

export default EventSearch;