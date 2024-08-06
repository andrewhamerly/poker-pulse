import { absentTitle } from '../../utils/EventAndScheduleHelpers'

const HandleEventTitle = ({ eventTitle }) => {
  const eTitle = absentTitle(eventTitle)
  return (
    <div>{eTitle}</div>
  )
}

export default HandleEventTitle