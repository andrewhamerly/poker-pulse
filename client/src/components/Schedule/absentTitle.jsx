import { absentTitle } from '../../utils/scheduleHelper'

const HandleEventTitle = ({ eventTitle }) => {
  const eTitle = absentTitle(eventTitle)
  return (
    <div>{eTitle}</div>
  )
}

export default HandleEventTitle