import { DateTime } from 'luxon'
import React, { useState } from 'react'
import CalendarDayNumber from './CalendarDayNumber'

type CalendarDaysProps = {
  calendarDate: DateTime
}

const CalendarDays: React.FC<CalendarDaysProps> = ({ calendarDate }) => {
  const dateBrazil = DateTime.now()
  const startDate = calendarDate.startOf('month')

  // Hooks
  const [selectedDate, setSelectedDate] = useState(dateBrazil)

  // Methods
  const pickDate = (day: number): void => {
    const pickedDate = calendarDate.set({ day })

    setSelectedDate(pickedDate)
  }

  const daysFromCalendar: JSX.Element[] = []
  for (let week = 1; week <= 6; week++) {
    for (let day = 1; day <= 7; day++) {
      const date = startDate.plus({ days: (week - 1) * 7 + day - startDate.weekday - 1 })

      const isDayFromPreviousMonth = week === 1 && day <= startDate.weekday
      const isDayFromNextMonth = date.month !== calendarDate.month
      const shouldBeDimmed = isDayFromPreviousMonth || isDayFromNextMonth

      if (shouldBeDimmed) {
        daysFromCalendar.push(
          <CalendarDayNumber testid={`day-${date.toISODate()}`} key={date.toISO()} dimmed>
            {date.day}
          </CalendarDayNumber>
        )

        continue
      }

      daysFromCalendar.push(
        <CalendarDayNumber
          testid={`day-${date.toISODate()}`}
          key={date.toISO()}
          selected={
            date.year === selectedDate.year && date.month === selectedDate.month && date.day === selectedDate.day
          }
          onClick={pickDate}
        >
          {date.day}
        </CalendarDayNumber>
      )
    }
  }

  return <>{daysFromCalendar.map((Day) => Day)}</>
}

export default CalendarDays
