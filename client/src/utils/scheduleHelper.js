const GetPrefix = (guarantee) => {
  return guarantee.includes('seats') ? '' : '$';
};

const FormatDate = (eventDate) => {
  const eDate = new Date(eventDate);
  const formattedDate = eDate.toLocaleDateString();
  return formattedDate
}
export { GetPrefix, FormatDate }