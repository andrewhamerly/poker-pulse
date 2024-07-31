const MultiDayValue = (multiDay) => {
  if (multiDay.multiDay === true) {
    return <div>✔</div>
  } else
    return <div>-</div>
}

export default MultiDayValue