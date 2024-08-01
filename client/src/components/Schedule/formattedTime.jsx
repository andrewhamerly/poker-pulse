import { FormatTime } from '../../utils/scheduleHelper'

const FormattedTime = ({ eventDate, eventTime }) => {
  const formattedTime = FormatTime(eventDate, eventTime)
  return (
    <div>{formattedTime}</div>
  )
}

export default FormattedTime