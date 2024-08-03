import '../components/Schedule/Schedule.css'

import { useQuery, useMutation } from '@apollo/client'

import FormattedEntryFee from '../components/Schedule/formattedEntryFee'
import GuaranteeType from '../components/Schedule/guaranteePrefix'
import FormattedDate from '../components/Schedule/formattedDate'
import FormattedTime from '../components/Schedule/formattedTime'
import FormattedChips from '../components/Schedule/formattedChips';
import FormattedLevels from '../components/Schedule/formattedLevels';
import MultiDayValue from '../components/Schedule/multiDay'
import HandleEventTitle from '../components/Schedule/absentTitle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

import { ADD_TO_SCHEDULE, REMOVE_FROM_SCHEDULE } from '../utils/mutations'
import { GET_EVENTS, GET_SCHEDULE } from '../utils/queries'

import { useRemoveFromSchedule, sortByDateTime } from '../utils/scheduleHelper';


const Event = () => {
  const { loading: eventsLoading, data: eventsData } = useQuery(GET_EVENTS);
  const { loading: scheduleLoading, data: scheduleData } = useQuery(GET_SCHEDULE);

  const handleRemoveFromSchedule = useRemoveFromSchedule()

  const [addEventToSchedule] = useMutation(ADD_TO_SCHEDULE)

  const events = eventsData?.events || [];
  const userSchedule = scheduleData?.getSchedule.schedule || []

  const sortedEvents = [...events].sort((a, b) => {
    const timeA = sortByDateTime(a.eventDate, a.eventTime);
    const timeB = sortByDateTime(b.eventDate, b.eventTime);
    return timeA - timeB;
  });

  const isEventInSchedule = (eventId) => {
    return userSchedule.some(event => event._id === eventId);
  }

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

      console.log('Event added to schedule!')
    } catch (error) {
      console.error('Error adding event to schedule.', error)
    }
  };

  return (
    <div>
      {(eventsLoading || scheduleLoading) ? (
        <div>Loading...</div>
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
                <th>Add to Schedule:</th>
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

export default Event;