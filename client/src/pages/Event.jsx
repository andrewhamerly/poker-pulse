import '../components/Schedule/Schedule.css'
import { useMutation, useQuery } from '@apollo/client'
import GuaranteeType from '../components/Schedule/guaranteePrefix'
import FormattedDate from '../components/Schedule/formattedDate'
import FormattedTime from '../components/Schedule/formattedTime'
import MultiDayValue from '../components/Schedule/multiDay'
import HandleEventTitle from '../components/Schedule/absentTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { ADD_TO_SCHEDULE} from '../utils/mutations'
import { GET_EVENTS } from '../utils/queries'


const Event = () => {
  const { loading, data } = useQuery(GET_EVENTS);
  const [ addEventToSchedule ] = useMutation(ADD_TO_SCHEDULE)
  const events = data?.events || [];

  // const eDate = Number(events.eventDate)
console.log(events)
  // const [scheduledEvents, setScheduledEvents] = useState([])
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
        variables: {eventData: eventToSave}
      });
      console.log('Event added to schedule!')
    } catch (error) {
      console.error('Error adding event to schedule', error)
    }
  }
  

  return (
    <div>
      {loading ? (
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
              {events.map((event) => (
                <tr key={event.id}>
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
                  <td><div>${event.entryFee}</div></td>
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
                  <td><div>{event.chipCount}</div></td>
                  <td><div>{event.levels}</div></td>
                  <td>
                    <GuaranteeType 
                      guarantee={event.guarantee} />
                    </td>
                  <td>
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