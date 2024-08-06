import { useQuery, useMutation } from '@apollo/client';
import React, { useState, useMemo } from 'react';
import { REMOVE_FROM_SCHEDULE } from './mutations';
import { ADD_TO_SCHEDULE } from './mutations';
import { GET_EVENTS, GET_SCHEDULE } from './queries';
import { useEventFilter } from '../contexts/EventFilterContext'
import AuthService from './auth';

const formatEntryFee = (entryFee) => {
  let entryFeeString = JSON.stringify(entryFee)
  let lowerCaseEntryFee = entryFeeString.toLowerCase();
  const removeNaN = entryFeeString.replace(/[^0-9]/g, '')
  const formattedNumber = parseInt(removeNaN, 10).toLocaleString();

  return (lowerCaseEntryFee.includes('$') || lowerCaseEntryFee.includes(',')) ? entryFee : formattedNumber;
};

const getPrefix = (guarantee) => {
  let lowerCaseGuarantee = guarantee.toLowerCase();
  return (lowerCaseGuarantee.includes('seats') || lowerCaseGuarantee.includes('$')) ? '' : '$';
};

const formatGuarantee = (guarantee) => {
  let lowerCaseGuarantee = guarantee.toLowerCase();
  const removeNaN = guarantee.replace(/[^0-9]/g, '')
  const formattedNumber = parseInt(removeNaN, 10).toLocaleString();

  return (lowerCaseGuarantee.includes('seats') || lowerCaseGuarantee.includes('$') || lowerCaseGuarantee.includes(',')) ? guarantee : formattedNumber;
};

const formatDate = (eventDate) => {
  const eDateNumber = Number(eventDate);
  const eDate = new Date(eDateNumber);
  const formattedDate = eDate.toLocaleDateString();
  return formattedDate
};

const formatTime = (eventDate, eventTime) => {
  const eDateNumber = Number(eventDate);
  const date = new Date(eDateNumber);
  // turn date from a string to miliseconds into a type of date

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  // format date YYYY-MM-DD

  let dateTime = `${formattedDate}T${eventTime}`
  // format date and time as 'YYY-MM-DDTHH:MM:SS' 

  const eTime = new Date(dateTime);
  //converting dateTime into typeof date

  const options = { hour: 'numeric', minute: '2-digit' };
  // options for formatting into 'HH:MM'

  const formattedTime = eTime.toLocaleTimeString([], options);
  // conver date 'YYY-MM-DDTHH:MM:SS' to time 'HH:MM'
  return formattedTime
};

const formatChips = (chipCount) => {
  const formattedNumber = parseInt(chipCount, 10).toLocaleString();

  return chipCount.includes(',') ? chipCount : formattedNumber;
};

const formatLevels = (levels) => {
  let lowerCaseLevels = levels.toLowerCase()
  const formattedLevels = lowerCaseLevels.replace(/minutes?|mins?/gi, 'Min').trim();
  return formattedLevels
}

const sortByDateTime = (eventDate, eventTime) => {
  const eDateNumber = Number(eventDate);
  const date = new Date(eDateNumber);
  // turn date from a string to miliseconds into a type of date

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  // format date YYYY-MM-DD

  let dateTime = `${formattedDate}T${eventTime}`
  const eTime = new Date(dateTime);

  return eTime.getTime();
}

const absentTitle = (eventTitle) => {
  return (eventTitle === null) ? '-' : eventTitle
}

const useRemoveFromSchedule = () => {
  const [removeEventFromSchedule] = useMutation(REMOVE_FROM_SCHEDULE)

  const handleRemoveFromSchedule = async (event) => {
    try {
      const eventToRemove = {
        _id: event._id
      };

      await removeEventFromSchedule({
        variables: { eventData: eventToRemove }
      });

      console.log('Event removed from schedule!')
    } catch (error) {
      console.log('Error removing event from schedule.')
    }
  };

  return handleRemoveFromSchedule
}

const useAddToSchedule = () => {
  const [addEventToSchedule] = useMutation(ADD_TO_SCHEDULE)

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

  return handleAddToSchedule
}

const useFilteredSortedEvents = () => {
  const { loading: eventsLoading, data: eventsData } = useQuery(GET_EVENTS);
  const { loading: scheduleLoading, data: scheduleData } = useQuery(GET_SCHEDULE);

  const {
    venueFilter,
    setVenueFilter,
    typeFilters,
    setTypeFilters,
    feeRanges,
    setFeeRanges
  } = useEventFilter();


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

  const isLoggedIn = AuthService.loggedIn();
  const isEventInSchedule = (eventId) => {
    return scheduleData?.getSchedule.schedule.some(event => event._id === eventId);
  };

  return {
    eventsLoading,
    eventsData,
    scheduleLoading,
    scheduleData,
    venueFilter,
    setVenueFilter,
    typeFilters,
    setTypeFilters,
    feeRanges,
    setFeeRanges,
    handleTypeChange,
    handleFeeRangeChange,
    filterByFee,
    sortedEvents,
    results,
    isLoggedIn,
    isEventInSchedule
  }
}

const useSortedScheduleFunctions = () => {
  const { loading, data } = useQuery(GET_SCHEDULE);

  const events = data?.getSchedule.schedule || [];

  const sortedEvents = [...events].sort((a, b) => {
    const timeA = sortByDateTime(a.eventDate, a.eventTime);
    const timeB = sortByDateTime(b.eventDate, b.eventTime);
    return timeA - timeB;
  });

  const isLoggedIn = AuthService.loggedIn();

  return {
    loading,
    data,
    events,
    sortedEvents,
    isLoggedIn
  }
}

export {
  formatEntryFee,
  getPrefix,
  formatGuarantee,
  formatDate,
  formatTime,
  formatChips,
  formatLevels,
  sortByDateTime,
  absentTitle,
  useRemoveFromSchedule,
  useAddToSchedule,
  useFilteredSortedEvents,
  useSortedScheduleFunctions
}