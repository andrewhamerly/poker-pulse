import { formatChips } from '../../utils/scheduleHelper'

const FormattedChips = ({ chipCount }) => {
  const formattedChips = formatChips(chipCount)
  return (
    <div>{formattedChips}</div>
  )
}

export default FormattedChips