import { useSate } from 'react';

  const guaranteeType = ({ guarantee }) => {
    const getPrefix = (guarantee) => {
      return guarantee.includes('seats') ? '' : '$';
    };
    
    const prefix = getPrefix(guarantee)

    return (
      <div>{prefix}{guarantee}</div>
    );
  };


export default guaranteeType