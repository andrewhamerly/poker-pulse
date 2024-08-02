import { formatLevels } from '../../utils/scheduleHelper'

const FormattedLevels = ({ levels }) => {
  const formattedLevels = formatLevels(levels)
  return (
    <div>{formattedLevels}</div>
  )
}

export default FormattedLevels