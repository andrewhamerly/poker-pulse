import { AbsentTitle } from '../../utils/scheduleHelper'

const HandleEventTitle = ({ eventTitle }) => {
  const eTitle = AbsentTitle(eventTitle)
  return (
    <div>{eTitle}</div>
  )
}

export default HandleEventTitle