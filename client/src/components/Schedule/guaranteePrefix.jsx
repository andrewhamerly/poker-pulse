import { formatGuarantee, getPrefix }  from '../../utils/EventAndScheduleHelpers'

  const GuaranteeType = ({ guarantee }) => {
    const prefix = getPrefix(guarantee)
    return (
      <div>{prefix}{formatGuarantee(guarantee)}</div>
    );
  };


export default GuaranteeType