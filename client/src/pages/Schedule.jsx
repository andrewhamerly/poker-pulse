// import { useState } from 'react';
import { useQuery } from '@apollo/client'
// import { ScheduleFunctions } from '../components/Schedule';
import GuaranteeType from '../components/Schedule/guaranteePrefix'
import FormattedDate from '../components/Schedule/formattedDate'
// import { GetPrefix, FormatDate} from '../utils/scheduleHelper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { GET_EVENTS } from '../utils/queries'


const Schedule = () => {
// const [getEvent, setEvent] = useState('');
const {loading, data} = useQuery(GET_EVENTS);
const events = data?.events || [];

const mEventDate = moment(`${events.eventDate}`, 'MM-DD-YYYY');
const mEventTime = moment(`${events.eventTime}`, 'HH:mm');
  // try {
  //   const data = await getEvents({})
  // } catch (error) {
  //   console.error(error)
  // }

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
              <th>Time:</th>
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
                <td><div>{events.eventTime}</div></td>
                {/* <td><div>{mEventDate.format('HH:mm')}</div></td>
                <td><div>{mEventTime.format('HH:mm')}</div></td> */}
                <td><div>{events.venue}</div></td>
                <td><div>{events.entryFee}</div></td>
                <td><div>{events.eventType}</div></td>
                <td><div>{events.series}</div></td>
                <td><div>{events.eventTitle}</div></td>
                <td><div>{events.multiDay}</div></td>
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

// return (
//   <div>
//     {loading ? (
//       <div>Loading...</div>
//     ) : (
//       <section className="scheduleList">
//         <table>
//           <thead>
//             <tr>
//               <th>Date:</th>
//               <th>Time:</th>
//               <th>Venue:</th>
//               <th>Fee:</th>
//               <th>Type:</th>
//               <th>Series:</th>
//               <th>Title:</th>
//               <th>Multi-Day:</th>
//               <th>Chips:</th>
//               <th>Levels:</th>
//               <th>Guarantee:</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event) => {
//               // const mEventDate = moment(event.eventDate, 'MM-DD-YYYY');
//               // const mEventTime = moment(event.eventTime, 'HH:mm');
//               const eDate = new Date(event.eventDate);
//               const formattedDate = eDate.toLocaleDateString();

//               return (
//                 <tr key={event.id}>
//                   <td><div>{formattedDate}</div></td>
//                   <td><div>{formattedDate}</div></td>
//                   {/* <td><div>{mEventDate.format('MM-DD-YYYY')}</div></td>
//                   <td><div>{mEventTime.format('HH:mm')}</div></td> */}
//                   <td><div>{event.venue}</div></td>
//                   <td><div>{event.entryFee}</div></td>
//                   <td><div>{event.eventType}</div></td>
//                   <td><div>{event.series}</div></td>
//                   <td><div>{event.eventTitle}</div></td>
//                   <td><div>{event.multiDay}</div></td>
//                   <td><div>{event.chipCount}</div></td>
//                   <td><div>{event.levels}</div></td>
//                   <td><GuaranteeType guarantee={event.guarantee} /></td>
//                   <td>
//                     <button
//                       type='button'
//                       onClick={() => addToSchedule(event.id)}
//                     >
//                       <span role="img" aria-label="add to schedule">
//                         <p>
//                           <FontAwesomeIcon icon={faCalendarPlus} />
//                         </p>
//                       </span>
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </section>
//     )}
//   </div>
// );
// };

export default Schedule;