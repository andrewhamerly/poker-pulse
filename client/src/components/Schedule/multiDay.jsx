const MultiDayValue = (multiDay) => {
  if (multiDay.multiDay === true) {
    return <div>✔</div>
  } else if(multiDay.multiDay === false) {
    return <div>❌</div>
  }
}

export default MultiDayValue