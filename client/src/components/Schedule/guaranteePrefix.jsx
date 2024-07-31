// import { useSate } from 'react';
import { GetPrefix } from '../../utils/scheduleHelper'

  const GuaranteeType = ({ guarantee }) => {
    const prefix = GetPrefix(guarantee)
    return (
      <div>{prefix}{guarantee}</div>
    );
  };


export default GuaranteeType