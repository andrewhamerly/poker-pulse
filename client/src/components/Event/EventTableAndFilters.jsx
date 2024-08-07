import React from 'react';
import FormattedEntryFee from '../../components/Schedule/formattedEntryFee';
import GuaranteeType from '../../components/Schedule/guaranteePrefix';
import FormattedDate from '../../components/Schedule/formattedDate';
import FormattedTime from '../../components/Schedule/formattedTime';
import FormattedChips from '../../components/Schedule/formattedChips';
import FormattedLevels from '../../components/Schedule/formattedLevels';
import MultiDayValue from '../../components/Schedule/multiDay'
import HandleEventTitle from '../../components/Schedule/absentTitle'
import EventFilters from '../../components/Event/EventFilters';

import { Spinner, Box } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

import { useFilteredSortedEvents } from '../../utils/EventAndScheduleHelpers';
import { useAddToSchedule, useRemoveFromSchedule } from '../../utils/EventAndScheduleHelpers';

const DesktopEventTableAndFilters = () => {

  const handleAddToSchedule = useAddToSchedule();
  const handleRemoveFromSchedule = useRemoveFromSchedule();

  const {
    eventsLoading,
    scheduleLoading,
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
    <div>
      <EventFilters />

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
                      entryFee={event.entryFee} />
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
                      chipCount={event.chipCount} />
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
}

const MobileEventTableAndFilters = () => {

  const handleAddToSchedule = useAddToSchedule();
  const handleRemoveFromSchedule = useRemoveFromSchedule();

  const {
    eventsLoading,
    scheduleLoading,
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
    <div className='schedule'>
      <EventFilters />

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
      ) : sortedEvents.length === 0 ? (
        <div className='noEventsContainer'>
          <div className='noEventText'>No events scheduled.</div>
          <div>
            <Link
              to='/event'>
              <button>
                Add Events To Your Schedule
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <section className="vScheduleList">
          <table className='vTables'>
            <tbody>
            {sortedEvents.map((event) => (
                <tr className='vTable' key={event._id}>
                  <th>Date:</th>
                  <td>
                    <FormattedDate
                      eventDate={event.eventDate} />
                  </td>
                  <th>Start Time:</th>
                  <td>
                    <FormattedTime
                      eventDate={event.eventDate}
                      eventTime={event.eventTime} />
                  </td>
                  <th>Venue:</th>
                  <td><div>{event.venue}</div></td>
                  <th>Fee:</th>
                  <td>
                    <FormattedEntryFee
                      entryFee={event.entryFee} />
                  </td>
                  <th>Type:</th>
                  <td><div>{event.eventType}</div></td>
                  <th>Series:</th>
                  <td><div>{event.series}</div></td>
                  <th>Title:</th>
                  <td>
                    <HandleEventTitle
                      eventTitle={event.eventTitle} />
                  </td>
                  <th>Multi-Day:</th>
                  <td>
                    <MultiDayValue
                      multiDay={event.multiDay} />
                  </td>
                  <th>Chips:</th>
                  <td>
                    <FormattedChips
                      chipCount={event.chipCount} />
                  </td>
                  <th>Levels:</th>
                  <td>
                    <FormattedLevels
                      levels={event.levels} />
                  </td>
                  <th>Guarantee:</th>
                  <td>
                    <GuaranteeType
                      guarantee={event.guarantee} />
                  </td>
                  <th>Add to Schedule:</th>
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
      )
      }
    </div >
  )
}

export { DesktopEventTableAndFilters, MobileEventTableAndFilters }
