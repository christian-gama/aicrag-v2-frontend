import { DateTime } from 'luxon'

const isDaySelected = (date: DateTime, selectedDate: number) => {
  return (
    date.year === DateTime.fromMillis(selectedDate).year &&
    date.month === DateTime.fromMillis(selectedDate).month &&
    date.day === DateTime.fromMillis(selectedDate).day
  )
}

export default isDaySelected
