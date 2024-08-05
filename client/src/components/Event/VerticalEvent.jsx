import '../../components/Schedule/Schedule.css';

import { useQuery, useMutation } from '@apollo/client'

import AuthService from '../../utils/auth'

import FormattedEntryFee from '../../components/Schedule/formattedEntryFee'
import GuaranteeType from '../../components/Schedule/guaranteePrefix'
import FormattedDate from '../../components/Schedule/formattedDate'
import FormattedTime from '../../components/Schedule/formattedTime'
import FormattedChips from '../../components/Schedule/formattedChips';
import FormattedLevels from '../../components/Schedule/formattedLevels';
import MultiDayValue from '../../components/Schedule/multiDay'
import HandleEventTitle from '../../components/Schedule/absentTitle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

import { ADD_TO_SCHEDULE, REMOVE_FROM_SCHEDULE } from '../../utils/mutations'
import { GET_EVENTS, GET_SCHEDULE } from '../../utils/queries'

import { useRemoveFromSchedule, sortByDateTime } from '../../utils/scheduleHelper';


const VerticalEvent = () => {
    const { loading: eventsLoading, data: eventsData } = useQuery(GET_EVENTS);
    const { loading: scheduleLoading, data: scheduleData } = useQuery(GET_SCHEDULE);

    const handleRemoveFromSchedule = useRemoveFromSchedule()

    const [addEventToSchedule] = useMutation(ADD_TO_SCHEDULE)

    const isLoggedIn = AuthService.loggedIn();

    const events = eventsData?.events || [];
    const userSchedule = scheduleData?.getSchedule.schedule || []

    console.log(events)

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
                                </tr>
                                <tr key={event._id}>
                                    <th>Start Time:</th>
                                    <td>
                                        <FormattedTime
                                            eventDate={event.eventDate}
                                            eventTime={event.eventTime} />
                                    </td>
                                </tr>
                                <tr key={event._id}>
                                    <th>Venue:</th>
                                    <td><div>{event.venue}</div></td>
                                </tr>
                                <tr key={event._id}>
                                    <th>Fee:</th>
                                    <td>
                                        <FormattedEntryFee
                                            entryFee={event.entryFee} />
                                    </td>
                                </tr>
                                <tr key={event._id}>
                                    <th>Type:</th>
                                    <td><div>{event.eventType}</div></td>
                                </tr>
                                <tr key={event._id}>
                                    <th>Series:</th>
                                    <td><div>{event.series}</div></td>
                                </tr>
                                <tr key={event._id}>
                                    <th>Title:</th>
                                    <td>
                                        <HandleEventTitle
                                            eventTitle={event.eventTitle} />
                                    </td>
                                </tr>
                                <tr key={event._id}>
                                    <th>Multi-Day:</th>
                                    <td>
                                        <MultiDayValue
                                            multiDay={event.multiDay} />
                                    </td>
                                </tr>
                                <tr key={event._id}>
                                    <th>Chips:</th>
                                    <td>
                                        <FormattedChips
                                            chipCount={event.chipCount} />
                                    </td>
                                </tr>
                                <tr key={event._id}>
                                    <th>Levels:</th>
                                    <td>
                                        <FormattedLevels
                                            levels={event.levels} />
                                    </td>
                                </tr>
                                <tr key={event._id}>
                                    <th>Guarantee:</th>
                                    <td>
                                        <GuaranteeType
                                            guarantee={event.guarantee} />
                                    </td>
                                </tr>
                                {isLoggedIn ? (
                                    <tr>
                                        <th>Add to Schedule:</th>
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
                                ) : null}
                            </div>
                        )
                        )}
                    </table>
                </section>
            )}
        </div>
    )
};

export default VerticalEvent;