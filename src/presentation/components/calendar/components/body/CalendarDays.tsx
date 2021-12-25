import { DateTime } from 'luxon'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/infra/store'
import { setSelectedDate } from '../../../../../infra/store/calendarReducer'
import CalendarDayNumber from './CalendarDayNumber'

const CalendarDays: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const calendarDate = useSelector<RootState, number>((state) => state.calendar.calendarDate)
  const selectedDate = useSelector<RootState, number>((state) => state.calendar.selectedDate)
  const startDate = DateTime.fromMillis(calendarDate).startOf('month')

  // Methods
  const pickDate = (day: number): void => {
    const pickedDate = DateTime.fromMillis(calendarDate).set({ day }).toMillis()

    dispatch(setSelectedDate(pickedDate))
  }

  const daysFromCalendar: JSX.Element[] = []
  for (let week = 1; week <= 6; week++) {
    for (let day = 1; day <= 7; day++) {
      const date = startDate.plus({ days: (week - 1) * 7 + day - startDate.weekday - 1 })

      const isDayFromPreviousMonth = week === 1 && day <= startDate.weekday
      const isDayFromNextMonth = date.month !== DateTime.fromMillis(calendarDate).month
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
            date.year === DateTime.fromMillis(selectedDate).year &&
            date.month === DateTime.fromMillis(selectedDate).month &&
            date.day === DateTime.fromMillis(selectedDate).day
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
