import { DateTime } from 'luxon'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calendarActions } from '@/application/models/calendar'
import { RootState, AppDispatch } from '@/application/store'
import CalendarDayNumber from '../CalendarDayNumber'
import pickDateHandler from './methods/pickDateHandler'
import isDaySelected from './utils/isDaySelected'
import shouldDayBeDimmed from './utils/shouldDayBeDimmed'

const CalendarDays: React.FC = (props) => {
  const { setSelectedDate } = calendarActions

  const calendarDate = useSelector<RootState, number>((state) => state.calendar.calendarDate)
  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, number>((state) => state.calendar.selectedDate)
  const startDate = DateTime.fromMillis(calendarDate).startOf('month')

  const daysFromCalendar: JSX.Element[] = []
  for (let week = 1; week <= 6; week++) {
    for (let day = 1; day <= 7; day++) {
      const date = startDate.plus({ days: (week - 1) * 7 + day - startDate.weekday - 1 })

      if (shouldDayBeDimmed({ calendarDate, date, day, startDate, week })) {
        daysFromCalendar.push(
          <CalendarDayNumber testid={`day-${date.toISODate()}`} key={date.toISO()} dimmed>
            {date.day}
          </CalendarDayNumber>
        )

        continue
      }

      daysFromCalendar.push(
        <CalendarDayNumber
          key={date.toISO()}
          onClick={() => pickDateHandler({ calendarDate, day: date.day, dispatch, setSelectedDate })}
          selected={isDaySelected(date, selectedDate)}
          testid={`day-${date.toISODate()}`}
        >
          {date.day}
        </CalendarDayNumber>
      )
    }
  }

  return <>{daysFromCalendar.map((Day) => Day)}</>
}

export default CalendarDays
