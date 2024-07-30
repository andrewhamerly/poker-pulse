import { useState } from 'react';
import { ScheduleFunctions } from '../components/Schedule/Schedule';
import { guaranteeType } from '../components/Schedule/Schedule'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function ScheduleList({events}) {
  // Define addToSchedule function or properly import it if it's part of ScheduleFunctions
  const addToSchedule = (id) => {
    // Implementation for adding to schedule
  };

  return (
    <div>
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
            {events.map((event) => (
              <tr key={event.id}>
                <td><div>{event.eventDate}</div></td>
                <td><div>{event.eventTime}</div></td>
                <td><div>{event.venue}</div></td>
                <td><div>{event.entryFee}</div></td>
                <td><div>{event.eventType}</div></td>
                <td><div>{event.series}</div></td>
                <td><div>{event.eventTitle}</div></td>
                <td><div>{event.multiDay}</div></td>
                <td><div>{event.chipCount}</div></td>
                <td><div>{event.levels}</div></td>
                <td><getPrefix /></td>
                <td>
                  <button
                    type='button'
                    onClick={() => addToSchedule(event.id)}
                  >
                    <span role="img" aria-label="add to schedule">
                      <p>
                        <FontAwesomeIcon icon={faCalendarCirclePlus} />
                      </p>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )

}