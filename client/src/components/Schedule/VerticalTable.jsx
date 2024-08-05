import './Schedule.css';

import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

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


const Schedule = () => {

    const { loading, data } = useQuery(GET_SCHEDULE);
    const handleRemoveFromSchedule = useRemoveFromSchedule()

    const events = data?.getSchedule.schedule || [];

    const sortedEvents = [...events].sort((a, b) => {
        const timeA = sortByDateTime(a.eventDate, a.eventTime);
        const timeB = sortByDateTime(b.eventDate, b.eventTime);
        return timeA - timeB;
    });

    return (
        <div className='schedule'>
            {loading ? (
                <div>Loading...</div>
            ) : events.length === 0 ? (
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

export default Schedule;