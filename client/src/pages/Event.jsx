import '../components/Schedule/Schedule.css';

import { DesktopEventTableAndFilters, MobileEventTableAndFilters } from '../components/Event/EventTableandFilters';
import EventFilters from '../components/Event/EventFilters';

import { useFilteredSortedEvents } from '../utils/EventAndScheduleHelpers';

import useWindowSize from '../utils/useWindowSize';

const Event = () => {

  const {
    eventsLoading,
    eventsData,
    scheduleLoading,
    scheduleData,
    handleTypeChange,
    handleFeeRangeChange,
    filterByFee,
    sortedEvents,
    results,
    isLoggedIn,
    isEventInSchedule
    } = useFilteredSortedEvents();

    const size = useWindowSize()


  if (sortedEvents.length === 0) {
    return( 
    <div>
      <EventFilters />
        <div className='noEventWithFilter'>
          No events to display for the applied filters.
        </div>
    </div>
    )
  }

  return (
    <div>
      {size.width >= 600 && <DesktopEventTableAndFilters />}
      {size.width < 600 && <MobileEventTableAndFilters />}
    </div>
    
  )
};

export default Event