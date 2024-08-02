import { REMOVE_FROM_SCHEDULE } from './mutations';
import { useMutation } from '@apollo/client';

const formatEntryFee = (entryFee) => {
  let entryFeeString = JSON.stringify(entryFee)
  let lowerCaseEntryFee = entryFeeString.toLowerCase();
  const removeNaN = entryFeeString.replace(/[^0-9]/g, '')
  const formattedNumber = parseInt(removeNaN, 10).toLocaleString();
  
  return (lowerCaseEntryFee.includes('$') || lowerCaseEntryFee.includes(',')) ? entryFee : formattedNumber;
};

const getPrefix = (guarantee) => {
  let lowerCaseGuarantee = guarantee.toLowerCase();
  return (lowerCaseGuarantee.includes('seats') || lowerCaseGuarantee.includes('$')) ? '' : '$';
};

const formatGuarantee = (guarantee) => {
  let lowerCaseGuarantee = guarantee.toLowerCase();
  const removeNaN = guarantee.replace(/[^0-9]/g, '')
  const formattedNumber = parseInt(removeNaN, 10).toLocaleString();
  
  return (lowerCaseGuarantee.includes('seats') || lowerCaseGuarantee.includes('$') || lowerCaseGuarantee.includes(',')) ? guarantee : formattedNumber;
};

const formatDate = (eventDate) => {
  const eDateNumber = Number(eventDate);
  const eDate = new Date(eDateNumber);
  const formattedDate = eDate.toLocaleDateString();
  return formattedDate
};

const formatTime = (eventDate, eventTime) => {
  const eDateNumber = Number(eventDate);
  const date = new Date(eDateNumber);
  // turn date from a string to miliseconds into a type of date

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  // format date YYYY-MM-DD

  let dateTime = `${formattedDate}T${eventTime}`
  // format date and time as 'YYY-MM-DDTHH:MM:SS' 

  const eTime = new Date(dateTime);
  //converting dateTime into typeof date

  const options = {hour: 'numeric', minute: '2-digit'};
  // options for formatting into 'HH:MM'

  const formattedTime = eTime.toLocaleTimeString([], options);
  // conver date 'YYY-MM-DDTHH:MM:SS' to time 'HH:MM'
  return formattedTime
};

const formatChips = (chipCount) => {
  const formattedNumber = parseInt(chipCount, 10).toLocaleString();
  
  return chipCount.includes(',') ? chipCount : formattedNumber;
};

const formatLevels = (levels) => {
  let lowerCaseLevels = levels.toLowerCase()
  const formattedLevels = lowerCaseLevels.replace(/minutes?|mins?/gi, 'Min').trim();
  return formattedLevels
}

const sortByDateTime = (eventDate, eventTime) => {
  const eDateNumber = Number(eventDate);
  const date = new Date(eDateNumber);
  // turn date from a string to miliseconds into a type of date

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  // format date YYYY-MM-DD

  let dateTime = `${formattedDate}T${eventTime}`
  const eTime = new Date(dateTime);

  return eTime.getTime();
}

const absentTitle = (eventTitle) => {
  return (eventTitle === null) ? '-' : eventTitle
}

const useRemoveFromSchedule = () => {
  const [ removeEventFromSchedule ] = useMutation(REMOVE_FROM_SCHEDULE)

  const handleRemoveFromSchedule = async (event) => {
    try {
        const eventToRemove = {
          _id: event._id
        };

        await removeEventFromSchedule({
          variables: {eventData: eventToRemove}
        });

      console.log('Event removed from schedule!')
    } catch (error) {
      console.log('Error removing event from schedule.')
    }
  };

  return handleRemoveFromSchedule
}

export { formatEntryFee,
         getPrefix, 
         formatGuarantee,
         formatDate, 
         formatTime, 
         formatChips,
         formatLevels,
         sortByDateTime, 
         absentTitle, 
         useRemoveFromSchedule }