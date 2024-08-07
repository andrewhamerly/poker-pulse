import { useFilteredSortedEvents } from '../../utils/EventAndScheduleHelpers'

const EventFilters = () => {
    const {
      eventsLoading,
      sortedEvents,
      venueFilter,
      setVenueFilter,
      typeFilters,
      setTypeFilters,
      feeRanges,
      setFeeRanges,
      handleTypeChange,
      handleFeeRangeChange,
      results,
      isLoggedIn,
      isEventInSchedule
      } = useFilteredSortedEvents();
  

  return (
    <div className='filterContainer'>
      <div className='venueContainer'>
        <label className='filterTitle'>Venue:</label>
        <input
          className='venueFilter'
          type="text"
          placeholder="Filter by venue"
          value={venueFilter}
          onChange={e => setVenueFilter(e.target.value)}
        />
      </div>

      <div className='eventfilterSection'>
        <label className='filterTitle'>Event Type:</label>
        <label>
          <input
            type="checkbox"
            checked={typeFilters.includes('NLH')}
            onChange={() => handleTypeChange('NLH')}
          />
          NLH
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeFilters.includes('PLO')}
            onChange={() => handleTypeChange('PLO')}
          />
          PLO
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeFilters.includes('PLO 8/B')}
            onChange={() => handleTypeChange('PLO 8/B')}
          />
          PLO 8/B
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeFilters.includes('Limit HE')}
            onChange={() => handleTypeChange('Limit HE')}
          />
          Limit HE
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeFilters.includes('Omaha 8/B')}
            onChange={() => handleTypeChange('Omaha 8/B')}
          />
          Omaha 8/B
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeFilters.includes('Mixed')}
            onChange={() => handleTypeChange('Mixed')}
          />
          Mixed
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeFilters.includes('Big O')}
            onChange={() => handleTypeChange('Big O')}
          />
          Big O
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeFilters.includes('Stud')}
            onChange={() => handleTypeChange('Stud')}
          />
          Stud
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeFilters.includes('2-7 TD')}
            onChange={() => handleTypeChange('2-7 TD')}
          />
          2-7 TD
        </label>
        <label>
          <input
            type="checkbox"
            checked={typeFilters.includes('NL 2-7')}
            onChange={() => handleTypeChange('NL 2-7')}
          />
          NL 2-7
        </label>
      </div>

      <div className='entryFeefilterSection'>
        <label className='filterTitle'>Fee Range:</label>
        <label>
          <input
            type="checkbox"
            checked={feeRanges.includes('0-599')}
            onChange={() => handleFeeRangeChange('0-599')}
          />
          $0 - $599
        </label>
        <label>
          <input
            type="checkbox"
            checked={feeRanges.includes('600-1099')}
            onChange={() => handleFeeRangeChange('600-1099')}
          />
          $600 - $1,099
        </label>
        <label>
          <input
            type="checkbox"
            checked={feeRanges.includes('1100-4999')}
            onChange={() => handleFeeRangeChange('1100-4999')}
          />
          $1,100 - $4,999
        </label>
        <label>
          <input
            type="checkbox"
            checked={feeRanges.includes('5000-9999')}
            onChange={() => handleFeeRangeChange('5000-9999')}
          />
          $5,000 - $9,999
        </label>
        <label>
          <input
            type="checkbox"
            checked={feeRanges.includes('10000+')}
            onChange={() => handleFeeRangeChange('10000+')}
          />
          $10,000+
        </label>
      </div>
      <div className='resultsContainer'>
          <label className='filterTitle'>Results:</label>
          <label>{results} Events</label>
        </div>
    </div>
  );
};

export default EventFilters


