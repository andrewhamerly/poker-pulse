import '../components/Schedule/Schedule.css'
import { useQuery } from '@apollo/client'
import GuaranteeType from '../components/Schedule/guaranteePrefix'
import FormattedDate from '../components/Schedule/formattedDate'
import FormattedTime from '../components/Schedule/formattedTime'
import MultiDayValue from '../components/Schedule/multiDay'
import HandleEventTitle from '../components/Schedule/absentTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons';
import { GET_SCHEDULE } from '../utils/queries'


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
const events = data?.getSchedule.schedule || [];

  const handleDeleteFromSchedule = async (event) => {
    try {
      console.log('Event removed from schedule!')
    } catch (error) {
      console.log('Error removing event from schedule.')
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
                    onClick={() => handleDeleteFromSchedule(event)}
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