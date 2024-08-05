import './Schedule.css';

import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AuthService from '../../utils/auth'

import Signup from '../../pages/Signup'

import FormattedEntryFee from './formattedEntryFee';
import GuaranteeType from './guaranteePrefix';
import FormattedDate from './formattedDate';
import FormattedTime from './formattedTime';
import FormattedChips from './formattedChips';
import FormattedLevels from './formattedLevels';
import MultiDayValue from './multiDay';
import HandleEventTitle from './absentTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

import { GET_SCHEDULE } from '../../utils/queries';

import { useRemoveFromSchedule, sortByDateTime } from '../../utils/scheduleHelper';


const HorizontalTable = () => {

  const { loading, data } = useQuery(GET_SCHEDULE);

  const handleRemoveFromSchedule = useRemoveFromSchedule()

  const isLoggedIn = AuthService.loggedIn();

  const events = data?.getSchedule.schedule || [];

  const sortedEvents = [...events].sort((a, b) => {
    const timeA = sortByDateTime(a.eventDate, a.eventTime);
    const timeB = sortByDateTime(b.eventDate, b.eventTime);
    return timeA - timeB;
  });

  if(!isLoggedIn) {
    return <div>
            <div className='loginToCreateSchedule'>Please login to view your schedule.</div>
            <Signup />
           </div>
  }

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
        <section className="hScheduleList">
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
                      <span role="img" aria-label="delete from schedule">
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

export default HorizontalTable;
