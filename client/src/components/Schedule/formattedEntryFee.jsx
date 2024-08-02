import { formatEntryFee } from '../../utils/scheduleHelper'

const FormattedEntryFee = ({ entryFee }) => {
  const formattedEntryFee = formatEntryFee(entryFee)
  return (
    <div>${formattedEntryFee}</div>
  )
}

export default FormattedEntryFee