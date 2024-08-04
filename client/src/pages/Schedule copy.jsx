import '../components/Schedule/Schedule.css';

import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import FormattedEntryFee from '../components/Schedule/formattedEntryFee';
import GuaranteeType from '../components/Schedule/guaranteePrefix';
import FormattedDate from '../components/Schedule/formattedDate';
import FormattedTime from '../components/Schedule/formattedTime';
import FormattedChips from '../components/Schedule/formattedChips';
import FormattedLevels from '../components/Schedule/formattedLevels';
import MultiDayValue from '../components/Schedule/multiDay';
import HandleEventTitle from '../components/Schedule/absentTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

import { GET_SCHEDULE } from '../utils/queries';

import { useRemoveFromSchedule, sortByDateTime } from '../utils/scheduleHelper';


const Schedule = () => {
  // UNCOMMENT OUT LINES 15-30 FOR JWT AUTH WHEN APP FINISHED
  //     const navigate = useNavigate();

  //   useEffect(() => {
  //     const token = Auth.getToken();

  //     if (!token) {
  //       navigate('/signup');
  //     }
  //     }, [navigate]);

  //     const token = Auth.getToken();

  //     if (!token) {
  //         return null;
  //     }


  const { loading, data } = useQuery(GET_SCHEDULE);
  const handleRemoveFromSchedule = useRemoveFromSchedule()

  const events = data?.getSchedule.schedule || [];

  const sortedEvents = [...events].sort((a, b) => {
    const timeA = sortByDateTime(a.eventDate, a.eventTime);
    const timeB = sortByDateTime(b.eventDate, b.eventTime);
    return timeA - timeB;
  });

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : events.length === 0 ? (
        <div className='noEventsContainer'>
          <div className='noEventText'>No events scheduled.</div>
          <div>
            <Link
              to='/event'>
              <button>
                Add Events
              </button>
            </Link>
          </div>
        </div>
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
                <th>Remove From Schedule:</th>
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
                    <button
                      className='deleteFromSchedule'
                      type='button'
                      onClick={() => handleRemoveFromSchedule(event)}
                    >
                      <span role="img" aria-label="add to schedule">
                        <p>
                          <FontAwesomeIcon icon={faCalendarXmark} />
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