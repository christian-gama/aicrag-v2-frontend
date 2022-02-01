import { CalendarDayNumber } from './CalendarDayNumber'
import { useCalendarDays } from './hooks'

export const CalendarDays: React.FC = () => {
  const { startDate, shouldDayBeDimmed, isDaySelected, pickDateHandler } =
    useCalendarDays()

  const daysFromCalendar: JSX.Element[] = []
  for (let week = 1; week <= 6; week++) {
    for (let day = 1; day <= 7; day++) {
      const date = startDate.plus({
        days: (week - 1) * 7 + day - startDate.weekday - 1
      })

      if (shouldDayBeDimmed(date, day, week)) {
        daysFromCalendar.push(
          <CalendarDayNumber
            testid={`day-${date.toISODate()}`}
            dayNumber={date.day}
            key={date.toISO()}
            dimmed
          />
        )

        continue
      }

      daysFromCalendar.push(
        <CalendarDayNumber
          onClick={() => pickDateHandler(date.day)}
          testid={`day-${date.toISODate()}`}
          selected={isDaySelected(date)}
          dayNumber={date.day}
          key={date.toISO()}
        />
      )
    }
  }

  return <>{daysFromCalendar.map((Day) => Day)}</>
}
