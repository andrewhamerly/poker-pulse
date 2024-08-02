import { formatDate } from '../../utils/scheduleHelper'

const FormattedDate = ({ eventDate }) => {
  const formattedDate = formatDate(eventDate)
  return (
    <div>{formattedDate}</div>
  )
}

export default FormattedDate