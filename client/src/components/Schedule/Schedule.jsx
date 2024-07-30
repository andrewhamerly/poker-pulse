// Do we need to useState in this app? Is this causing the errors for the Schedule component/page?
// ERROR MOST LIKELY DUE TO LACK OF "useContext" in app for state management

import { useState } from 'react';

  const guaranteeType = ({ guarantee }) => {
    const getPrefix = (guarantee) => {
      return guarantee.includes('seats') ? '' : '$';
    };
    
    const prefix = getPrefix(guarantee)

    return (
      <div>{prefix}{guarantee}</div>
    );
  };

  // This function is a placeholder to fix the following Syntax Error
  // ERROR: The requested module '/src/components/Schedule/Schedule.jsx?t=1722357752974' does not provide an export named 'ScheduleFunctions' (at Schedule.jsx:2:10)Understand this error
  const ScheduleFunctions = () => {
    console.log('ScheduleFunctions Testing.')
  }


export { guaranteeType, ScheduleFunctions }