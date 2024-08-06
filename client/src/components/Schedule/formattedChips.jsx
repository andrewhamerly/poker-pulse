import { formatChips } from '../../utils/EventAndScheduleHelpers'

const FormattedChips = ({ chipCount }) => {
  const formattedChips = formatChips(chipCount)
  return (
    <div>{formattedChips}</div>
  )
}

export default FormattedChips