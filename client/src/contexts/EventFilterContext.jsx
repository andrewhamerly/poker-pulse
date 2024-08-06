import { createContext, useContext, useState } from 'react';
const EventFilterContext = createContext();

export const useEventFilter = () => useContext(EventFilterContext);

export const EventFilterProvider = ({ children }) => {
  const [venueFilter, setVenueFilter] = useState('');
  const [typeFilters, setTypeFilters] = useState([]);
  const [feeRanges, setFeeRanges] = useState([]);

  return (
    <EventFilterContext.Provider value={{ venueFilter, setVenueFilter, typeFilters, setTypeFilters, feeRanges, setFeeRanges }}>
      {children}
    </EventFilterContext.Provider>
  );
}
