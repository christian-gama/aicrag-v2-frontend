import { DateTime } from 'luxon'

type Data = {
  calendarDate: number
  date: DateTime
  day: number
  startDate: DateTime
  week: number
}

const shouldDayBeDimmed = (data: Data) => {
  const isDayFromPreviousMonth = data.week === 1 && data.day <= data.startDate.weekday
  const isDayFromNextMonth = data.date.month !== DateTime.fromMillis(data.calendarDate).month
  const result = isDayFromPreviousMonth || isDayFromNextMonth

  return result
}

export default shouldDayBeDimmed
