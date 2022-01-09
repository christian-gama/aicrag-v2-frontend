import React from 'react'
import CalendarDayNumber from './CalendarDayNumber'
import useCalendarDays from './hooks/useCalendarDays'

const CalendarDays: React.FC = () => {
  const { startDate, shouldDayBeDimmed, isDaySelected, pickDateHandler } = useCalendarDays()

  const daysFromCalendar: JSX.Element[] = []
  for (let week = 1; week <= 6; week++) {
    for (let day = 1; day <= 7; day++) {
      const date = startDate.plus({ days: (week - 1) * 7 + day - startDate.weekday - 1 })

      if (shouldDayBeDimmed(date, day, week)) {
        daysFromCalendar.push(
          <CalendarDayNumber testid={`day-${date.toISODate()}`} key={date.toISO()} dimmed dayNumber={date.day} />
        )

        continue
      }

      daysFromCalendar.push(
        <CalendarDayNumber
          dayNumber={date.day}
          key={date.toISO()}
          onClick={() => pickDateHandler(date.day)}
          selected={isDaySelected(date)}
          testid={`day-${date.toISODate()}`}
        />
      )
    }
  }

  return <>{daysFromCalendar.map((Day) => Day)}</>
}

export default CalendarDays
