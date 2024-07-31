import { FormatTime } from '../../utils/scheduleHelper'

const FormattedTime = ({ eventTime }) => {
  const formattedTime = FormatTime(eventTime)
  return (
    <div>{formattedTime}</div>
  )
}

export default FormattedTime