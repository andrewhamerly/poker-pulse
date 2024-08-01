// import { useState } from 'react';
import '../components/Schedule/Schedule.css'
import { useQuery } from '@apollo/client'
// import { ScheduleFunctions } from '../components/Schedule';
import GuaranteeType from '../components/Schedule/guaranteePrefix'
import FormattedDate from '../components/Schedule/formattedDate'
import FormattedTime from '../components/Schedule/formattedTime'
import MultiDayValue from '../components/Schedule/multiDay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { GET_EVENTS } from '../utils/queries'


const Schedule = () => {
// const [getEvent, setEvent] = useState('');
const {loading, data} = useQuery(GET_EVENTS);
const events = data?.events || [];

// const [scheduledEvents, setScheduledEvents] = useState([])


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
            </tr>
          </thead>

          <tbody>
            {events.map((events) => (
              <tr key={events.id}>
                <td><FormattedDate eventDate={events.eventDate}/></td>
                <td><FormattedTime eventTime={events.eventTime}/></td>
                <td><div>{events.venue}</div></td>
                <td><div>${events.entryFee}</div></td>
                <td><div>{events.eventType}</div></td>
                <td><div>{events.series}</div></td>
                <td><div>{events.eventTitle}</div></td>
                <td><MultiDayValue multiDay={events.multiDay}/></td>
                <td><div>{events.chipCount}</div></td>
                <td><div>{events.levels}</div></td>
                <td><GuaranteeType guarantee={events.guarantee}/></td>
                <td>
                  <button
                    type='button'
                    onClick={() => addToSchedule(events.id)}
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

export default Schedule;