const GetPrefix = (guarantee) => {
  return guarantee.includes('seats') ? '' : '$';
};

const FormatDate = (eventDate) => {
  const eDateNumber = Number(eventDate);
  const eDate = new Date(eDateNumber);
  const formattedDate = eDate.toLocaleDateString();
  return formattedDate
};

const FormatTime = (eventTime) => {
  const eTime = new Date(eventTime);
  const formattedTime = eTime.toLocaleTimeString();
  return formattedTime
};

export { GetPrefix, FormatDate, FormatTime }