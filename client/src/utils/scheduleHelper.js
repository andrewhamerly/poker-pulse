const GetPrefix = (guarantee) => {
  return guarantee.includes('seats') ? '' : '$';
};

const FormatDate = (eventDate) => {
  const eDateNumber = Number(eventDate);
  const eDate = new Date(eDateNumber);
  const formattedDate = eDate.toLocaleDateString();
  return formattedDate
}

const FormatTime = (eventTime) => {
  const eDateNumber = Number(eventTime);
  const eDate = new Date(eDateNumber);
  const formattedDate = eDate.toLocaleTimeString();
  return formattedDate
}
export { GetPrefix, FormatDate, FormatTime }