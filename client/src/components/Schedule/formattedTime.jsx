import { formatTime } from '../../utils/EventAndScheduleHelpers'

const FormattedTime = ({ eventDate, eventTime }) => {
  const formattedTime = formatTime(eventDate, eventTime)
  return (
    <div>{formattedTime}</div>
  )
}

export default FormattedTime