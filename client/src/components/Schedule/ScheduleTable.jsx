import './Schedule.css';

import { Link } from 'react-router-dom';

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


import { useRemoveFromSchedule, useSortedScheduleFunctions } from '../../utils/scheduleHelper';

const DesktopScheduleTable = () => {

  const { loading,
          data,
          events,
          sortedEvents
          // isLoggedIn
        } = useSortedScheduleFunctions();
  
  const isLoggedIn = AuthService.loggedIn();

  const handleRemoveFromSchedule = useRemoveFromSchedule();

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
      ) : sortedEvents.length === 0 ? (
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

const MobileScheduleTable = () => {

  const { loading,
          data,
          events,
          sortedEvents
        } = useSortedScheduleFunctions();

  const handleRemoveFromSchedule = useRemoveFromSchedule();

  if(!isLoggedIn) {
    return <div>
            <div className='loginToCreateSchedule'>Please login to view your schedule.</div>
            <Signup />
           </div>
  }

  return (
    <div className='schedule'>
      {loading ? (
        <div>Loading...</div>
      ) : sortedEvents.length === 0 ? (
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
        <section className="vScheduleList">
          <table className='vTables'>
            {sortedEvents.map((event) => (
              <div className='vTable'>
                <tr key={event._id}>
                  <th>Date:</th>
                  <td>
                    <FormattedDate
                      eventDate={event.eventDate} />
                  </td>
                </tr><tr key={event._id}>
                  <th>Start Time:</th>
                  <td>
                    <FormattedTime
                      eventDate={event.eventDate}
                      eventTime={event.eventTime} />
                  </td>
                </tr><tr key={event._id}>
                  <th>Venue:</th>
                  <td><div>{event.venue}</div></td>
                </tr><tr key={event._id}>
                  <th>Fee:</th>
                  <td>
                    <FormattedEntryFee
                      entryFee={event.entryFee} />
                  </td>
                </tr><tr key={event._id}>
                  <th>Type:</th>
                  <td><div>{event.eventType}</div></td>
                </tr><tr key={event._id}>
                  <th>Series:</th>
                  <td><div>{event.series}</div></td>
                </tr><tr key={event._id}>
                  <th>Title:</th>
                  <td>
                    <HandleEventTitle
                      eventTitle={event.eventTitle} />
                  </td>
                </tr><tr key={event._id}>
                  <th>Multi-Day:</th>
                  <td>
                    <MultiDayValue
                      multiDay={event.multiDay} />
                  </td>
                </tr><tr key={event._id}>
                  <th>Chips:</th>
                  <td>
                    <FormattedChips
                      chipCount={event.chipCount} />
                  </td>
                </tr><tr key={event._id}>
                  <th>Levels:</th>
                  <td>
                    <FormattedLevels
                      levels={event.levels} />
                  </td>
                </tr><tr key={event._id}>
                  <th>Guarantee:</th>
                  <td>
                    <GuaranteeType
                      guarantee={event.guarantee} />
                  </td>
                </tr><tr key={event._id}>
                  <th>Remove From Schedule:</th>
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
              </div>
            )
            )}
          </table>
        </section>
      )
      }
    </div >
  )
};

export { DesktopScheduleTable, MobileScheduleTable }
