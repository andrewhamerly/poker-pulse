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

// const MultiDayValue = (multiDay) => {
//   if (multiDay === true) {
//     return <div>✔</div>
//   } else
//     return <div>-</div>
// }

export { GetPrefix, FormatDate, FormatTime }