import { formatDate } from '../../utils/EventAndScheduleHelpers'

const FormattedDate = ({ eventDate }) => {
  const formattedDate = formatDate(eventDate)
  return (
    <div>{formattedDate}</div>
  )
}

export default FormattedDate