import { formatLevels } from '../../utils/EventAndScheduleHelpers'

const FormattedLevels = ({ levels }) => {
  const formattedLevels = formatLevels(levels)
  return (
    <div>{formattedLevels}</div>
  )
}

export default FormattedLevels