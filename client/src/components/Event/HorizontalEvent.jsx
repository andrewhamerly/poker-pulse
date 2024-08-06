import '../../components/Schedule/Schedule.css';
import React, { useState, useMemo } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import AuthService from '../../utils/auth';
import FormattedEntryFee from '../../components/Schedule/formattedEntryFee';
import GuaranteeType from '../../components/Schedule/guaranteePrefix';
import FormattedDate from '../../components/Schedule/formattedDate';
import FormattedTime from '../../components/Schedule/formattedTime';
import FormattedChips from '../../components/Schedule/formattedChips';
import FormattedLevels from '../../components/Schedule/formattedLevels';
import EventFilters from '../../components/Event/EventFilters';
import MultiDayValue from '../../components/Schedule/multiDay'
import HandleEventTitle from '../../components/Schedule/absentTitle'
import { Spinner, Box } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

import { ADD_TO_SCHEDULE } from '../../utils/mutations';
import { GET_EVENTS, GET_SCHEDULE } from '../../utils/queries';
import { useRemoveFromSchedule, sortByDateTime } from '../../utils/scheduleHelper';

const HorizontalEvent = () => {
  const { loading: eventsLoading, data: eventsData } = useQuery(GET_EVENTS);
  const { loading: scheduleLoading, data: scheduleData } = useQuery(GET_SCHEDULE);

  const [venueFilter, setVenueFilter] = useState('');
  const [typeFilters, setTypeFilters] = useState([]);
  const [feeRanges, setFeeRanges] = useState([]);

  const handleRemoveFromSchedule = useRemoveFromSchedule()

  const [addEventToSchedule] = useMutation(ADD_TO_SCHEDULE)

  const isLoggedIn = AuthService.loggedIn();

  const handleTypeChange = (type) => {
    setTypeFilters(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  };

  const handleFeeRangeChange = (range) => {
    setFeeRanges(prev => prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]);
  };

  const filterByFee = (entryFee) => {
    if (feeRanges.length === 0) return true;
    return feeRanges.some(range => {
      switch (range) {
        case '0-599': return entryFee >= 0 && entryFee <= 599;
        case '600-1099': return entryFee >= 600 && entryFee <= 1099;
        case '1100-4999': return entryFee >= 1100 && entryFee <= 4999;
        case '5000-9999': return entryFee >= 5000 && entryFee <= 9999;
        case '10000+': return entryFee >= 10000;
        default: return false;
      }
    });
  };

  const events = useMemo(() => {
    return eventsData?.events.filter(event => {
      return (venueFilter ? event.venue.toLowerCase().includes(venueFilter.toLowerCase()) : true) &&
             (typeFilters.length > 0 ? typeFilters.includes(event.eventType) : true) &&
             filterByFee(event.entryFee);
    }) || [];
  }, [eventsData, venueFilter, typeFilters, feeRanges]);

  const sortedEvents = [...events].sort((a, b) => {
    const timeA = sortByDateTime(a.eventDate, a.eventTime);
    const timeB = sortByDateTime(b.eventDate, b.eventTime);
    return timeA - timeB;
  });

  const results = sortedEvents.length

  const isEventInSchedule = (eventId) => {
    return scheduleData?.getSchedule.schedule.some(event => event._id === eventId);
  };

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

      console.log('Event added to schedule!');
    } catch (error) {
      console.error('Error adding event to schedule.', error);
    }
  };

  if (sortedEvents.length === 0) {
    return( 
    <div>
      <EventFilters
        venueFilter={venueFilter}
        setVenueFilter={setVenueFilter}
        typeFilters={typeFilters}
        feeRanges={feeRanges}
        handleTypeChange={handleTypeChange}
        handleFeeRangeChange={handleFeeRangeChange}
        results={results}/>
      
        
        <div className='noEventWithFilter'>
          No events to display for the applied filters.
        </div>
    </div>
    )
  }

  return (
    <div>
      <EventFilters
        venueFilter={venueFilter}
        setVenueFilter={setVenueFilter}
        typeFilters={typeFilters}
        feeRanges={feeRanges}
        handleTypeChange={handleTypeChange}
        handleFeeRangeChange={handleFeeRangeChange}
        results={results}/>
    
      {(eventsLoading || scheduleLoading) ? (
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
    </Box>
      ) : (
        <section className="scheduleList">
          <table>
            <thead>
              <tr>
                <th>Date:</th>
                <th>Start Time:</th>
                <th>Venue:</th>
                <th>Fee:</th>
                <th>Type:</th>
                <th>Series:</th>
                <th>Title:</th>
                <th>Multi-Day:</th>
                <th>Chips:</th>
                <th>Levels:</th>
                <th>Guarantee:</th>
                {isLoggedIn ? (
                <th>Add to Schedule:</th>
                  ) : null}
              </tr>
            </thead>

            <tbody>
              {sortedEvents.map((event) => (
                <tr key={event._id}>
                  {/* changed from event.id to get rid of error: 'Each child in a list should have a unique "key" prop.' */}
                  <td>
                    <FormattedDate
                      eventDate={event.eventDate} />
                  </td>
                  <td>
                    <FormattedTime
                      eventDate={event.eventDate}
                      eventTime={event.eventTime} />
                  </td>
                  <td><div>{event.venue}</div></td>
                  <td>
                    <FormattedEntryFee
                      entryFee={event.entryFee}/>
                  </td>
                  <td><div>{event.eventType}</div></td>
                  <td><div>{event.series}</div></td>
                  <td>
                    <HandleEventTitle
                      eventTitle={event.eventTitle} />
                  </td>
                  <td>
                    <MultiDayValue
                      multiDay={event.multiDay} />
                  </td>
                  <td>
                    <FormattedChips 
                      chipCount={event.chipCount}/>
                  </td>
                  <td>
                    <FormattedLevels 
                      levels={event.levels} />
                  </td>
                  <td>
                    <GuaranteeType
                      guarantee={event.guarantee} />
                  </td>
                  {isLoggedIn ? (
                  <td>
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
                  </td>
                  ) : null}
                </tr>
              )
              )}
            </tbody>
          </table>
        </section>
      )}
    </div>
  )
};

export default HorizontalEvent;