import { FormatDate } from '../../utils/scheduleHelper'

const FormattedDate = ({ eventDate }) => {
  const formattedDate = FormatDate(eventDate)
  return (
    <div>{formattedDate}</div>
  )
}

export default FormattedDate