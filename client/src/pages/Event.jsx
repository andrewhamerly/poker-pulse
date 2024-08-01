import '../components/Schedule/Schedule.css'
import { useMutation, useQuery } from '@apollo/client'
import GuaranteeType from '../components/Schedule/guaranteePrefix'
import FormattedDate from '../components/Schedule/formattedDate'
import FormattedTime from '../components/Schedule/formattedTime'
import MultiDayValue from '../components/Schedule/multiDay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { ADD_TO_SCHEDULE} from '../utils/mutations'
import { GET_EVENTS } from '../utils/queries'


const Event = () => {
  const { loading, data } = useQuery(GET_EVENTS);
  const [ addEventToSchedule ] = useMutation(ADD_TO_SCHEDULE)
  const events = data?.events || [];

  // const eDate = Number(events.eventDate)
  console.log()

  // const [scheduledEvents, setScheduledEvents] = useState([])
  const handleAddToSchedule = async (events) => {
    try {
      const eventToSave = {
        _id: events._id,
        eventDate: events.eventDate,
        eventTime: events.eventTime,
        venue: events.venue,
        entryFee: events.entryFee,
        eventType: events.eventType,
        series: events.series,
        eventTitle: events.eventTitle,
        multiDay: events.multiDay,
        chipCount: events.chipCount,
        levels: events.levels,
        guarantee: events.guarantee,
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
              {events.map((events) => (
                <tr key={events.id}>
                  <td><FormattedDate eventDate={events.eventDate} /></td>
                  <td><FormattedTime eventTime={events.eventTime} /></td>
                  <td><div>{events.venue}</div></td>
                  <td><div>${events.entryFee}</div></td>
                  <td><div>{events.eventType}</div></td>
                  <td><div>{events.series}</div></td>
                  <td><div>{events.eventTitle}</div></td>
                  <td><MultiDayValue multiDay={events.multiDay} /></td>
                  <td><div>{events.chipCount}</div></td>
                  <td><div>{events.levels}</div></td>
                  <td><GuaranteeType guarantee={events.guarantee} /></td>
                  <td>
                    <button
                      className='addToSchedule'
                      type='button'
                      onClick={() => handleAddToSchedule(events)}
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