import { formatTime } from '../../utils/scheduleHelper'

const FormattedTime = ({ eventDate, eventTime }) => {
  const formattedTime = formatTime(eventDate, eventTime)
  return (
    <div>{formattedTime}</div>
  )
}

export default FormattedTime