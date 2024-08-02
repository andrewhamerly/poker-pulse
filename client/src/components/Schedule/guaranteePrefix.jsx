import { getPrefix }  from '../../utils/scheduleHelper'

  const GuaranteeType = ({ guarantee }) => {
    const prefix = getPrefix(guarantee)
    return (
      <div>{prefix}{guarantee}</div>
    );
  };


export default GuaranteeType