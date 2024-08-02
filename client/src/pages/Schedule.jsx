import '../components/Schedule/Schedule.css';

import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import GuaranteeType from '../components/Schedule/guaranteePrefix';
import FormattedDate from '../components/Schedule/formattedDate';
import FormattedTime from '../components/Schedule/formattedTime';
import MultiDayValue from '../components/Schedule/multiDay';
import HandleEventTitle from '../components/Schedule/absentTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

import { GET_SCHEDULE } from '../utils/queries';
// import { REMOVE_FROM_SCHEDULE } from '../utils/mutations';

import { useRemoveFromSchedule } from '../utils/scheduleHelper';


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


const {loading, data} = useQuery(GET_SCHEDULE);
const handleRemoveFromSchedule = useRemoveFromSchedule()
// const [ removeEventFromSchedule ] = useMutation(REMOVE_FROM_SCHEDULE)
const events = data?.getSchedule.schedule || [];

  // const handleRemoveFromSchedule = async (event) => {
  //   try {
  //       const eventToRemove = {
  //         _id: event._id
  //       };

  //       await removeEventFromSchedule({
  //         variables: {eventData: eventToRemove}
  //       });

  //     console.log('Event removed from schedule!')
  //   } catch (error) {
  //     console.log('Error removing event from schedule.')
  //   }
  // };


return (
  <div>
    {loading ? (
      <div>Loading...</div>
    ) : events.length ===0 ? (
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