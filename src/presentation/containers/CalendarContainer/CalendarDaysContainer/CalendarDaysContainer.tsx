import { DateTime } from 'luxon'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calendarActions } from '@/application/models/redux/calendar'
import { RootState, AppDispatch } from '@/application/store'
import CalendarDayNumber from '@/presentation/components/Calendar/subComponents/CalendarDayNumber'
import isDaySelected from './methods/isDaySelected'
import pickDateHandler from './methods/pickDateHandler'
import shouldDayBeDimmed from './methods/shouldDayBeDimmed'

const CalendarDaysContainer: React.FC = () => {
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
          <CalendarDayNumber testid={`day-${date.toISODate()}`} key={date.toISO()} dimmed dayNumber={date.day} />
        )

        continue
      }

      daysFromCalendar.push(
        <CalendarDayNumber
          key={date.toISO()}
          onClick={() => pickDateHandler({ calendarDate, day: date.day, dispatch, setSelectedDate })}
          selected={isDaySelected(date, selectedDate)}
          testid={`day-${date.toISODate()}`}
          dayNumber={date.day}
        />
      )
    }
  }

  return <>{daysFromCalendar.map((Day) => Day)}</>
}

export default CalendarDaysContainer
