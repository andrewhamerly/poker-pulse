import '../components/Schedule/Schedule.css';
import React, { useState, useMemo } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import AuthService from '../utils/auth';
import FormattedEntryFee from '../components/Schedule/formattedEntryFee';
import GuaranteeType from '../components/Schedule/guaranteePrefix';
import FormattedDate from '../components/Schedule/formattedDate';
import FormattedTime from '../components/Schedule/formattedTime';
import FormattedChips from '../components/Schedule/formattedChips';
import FormattedLevels from '../components/Schedule/formattedLevels';
import MultiDayValue from '../components/Schedule/multiDay';
import HandleEventTitle from '../components/Schedule/absentTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

import { ADD_TO_SCHEDULE, REMOVE_FROM_SCHEDULE } from '../utils/mutations';
import { GET_EVENTS, GET_SCHEDULE } from '../utils/queries';
import { useRemoveFromSchedule, sortByDateTime } from '../utils/scheduleHelper';

const Event = () => {
  const { loading: eventsLoading, data: eventsData } = useQuery(GET_EVENTS);
  const { loading: scheduleLoading, data: scheduleData } = useQuery(GET_SCHEDULE);

  const [addEventToSchedule] = useMutation(ADD_TO_SCHEDULE);
  const handleRemoveFromSchedule = useRemoveFromSchedule();
  const isLoggedIn = AuthService.loggedIn();

  const [venueFilter, setVenueFilter] = useState('');
  const [typeFilters, setTypeFilters] = useState([]);
  const [feeRanges, setFeeRanges] = useState([]);

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

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Filter by venue"
          value={venueFilter}
          onChange={e => setVenueFilter(e.target.value)}
        />
        <div>
          {/* Event Type Filters */}
          <label><input type="checkbox" checked={typeFilters.includes('NLH')} onChange={() => handleTypeChange('NLH')} /> NLH</label>
          <label><input type="checkbox" checked={typeFilters.includes('PLO')} onChange={() => handleTypeChange('PLO')} /> PLO</label>
          <label><input type="checkbox" checked={typeFilters.includes('PLO 8/B')} onChange={() => handleTypeChange('PLO 8/B')} /> PLO 8/B</label>
          <label><input type="checkbox" checked={typeFilters.includes('Limit HE')} onChange={() => handleTypeChange('Limit HE')} /> Limit HE</label>
          <label><input type="checkbox" checked={typeFilters.includes('Omaha 8/B')} onChange={() => handleTypeChange('Omaha 8/B')} /> Omaha 8/B</label>
          <label><input type="checkbox" checked={typeFilters.includes('Mixed')} onChange={() => handleTypeChange('Mixed')} /> Mixed</label>
          <label><input type="checkbox" checked={typeFilters.includes('Big O')} onChange={() => handleTypeChange('Big O')} /> Big O</label>
          <label><input type="checkbox" checked={typeFilters.includes('Stud')} onChange={() => handleTypeChange('Stud')} /> Stud</label>
          <label><input type="checkbox" checked={typeFilters.includes('2-7 TD')} onChange={() => handleTypeChange('2-7 TD')} /> 2-7 TD</label>
          <label><input type="checkbox" checked={typeFilters.includes('NL 2-7')} onChange={() => handleTypeChange('NL 2-7')} /> NL 2-7</label>
        </div>
        <div>
          {/* Fee Range Filters */}
          <label><input type="checkbox" checked={feeRanges.includes('0-599')} onChange={() => handleFeeRangeChange('0-599')} /> $0 - $599</label>
          <label><input type="checkbox" checked={feeRanges.includes('600-1099')} onChange={() => handleFeeRangeChange('600-1099')} /> $600 - $1099</label>
          <label><input type="checkbox" checked={feeRanges.includes('1100-4999')} onChange={() => handleFeeRangeChange('1100-4999')} /> $1100 - $4999</label>
          <label><input type="checkbox" checked={feeRanges.includes('5000-9999')} onChange={() => handleFeeRangeChange('5000-9999')} /> $5000 - $9999</label>
          <label><input type="checkbox" checked={feeRanges.includes('10000+')} onChange={() => handleFeeRangeChange('10000+')} /> $10000+</label>
        </div>
      </div>
      {eventsLoading ? (
        <div>Loading...</div>
      ) : (
        <section className="scheduleList">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Start Time</th>
                <th>Venue</th>
                <th>Fee</th>
                <th>Type</th>
                <th>Series</th>
                <th>Title</th>
                <th>Multi-Day</th>
                <th>Chips</th>
                <th>Levels</th>
                <th>Guarantee</th>
                <th>Add to Schedule</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id}>
                  <td><FormattedDate eventDate={event.eventDate} /></td>
                  <td><FormattedTime eventDate={event.eventDate} eventTime={event.eventTime} /></td>
                  <td>{event.venue}</td>
                  <td><FormattedEntryFee entryFee={event.entryFee}/></td>
                  <td>{event.eventType}</td>
                  <td>{event.series}</td>
                  <td><HandleEventTitle eventTitle={event.eventTitle} /></td>
                  <td><MultiDayValue multiDay={event.multiDay} /></td>
                  <td><FormattedChips chipCount={event.chipCount}/></td>
                  <td><FormattedLevels levels={event.levels} /></td>
                  <td><GuaranteeType guarantee={event.guarantee} /></td>
                  <td>
                    <button
                      className='addToSchedule'
                      onClick={() => handleAddToSchedule(event)}
                    >
                      <FontAwesomeIcon icon={faCalendarPlus} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default Event;