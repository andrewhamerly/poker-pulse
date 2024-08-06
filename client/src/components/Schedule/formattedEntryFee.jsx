import { formatEntryFee } from '../../utils/EventAndScheduleHelpers'

const FormattedEntryFee = ({ entryFee }) => {
  const formattedEntryFee = formatEntryFee(entryFee)
  return (
    <div>${formattedEntryFee}</div>
  )
}

export default FormattedEntryFee