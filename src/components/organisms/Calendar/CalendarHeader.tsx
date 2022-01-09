import writeMonthYear from '@/helpers/writeMonthYear'
import { DateTime } from 'luxon'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calendarActions } from '@/context/models/calendar/calendar.actions'
import { CalendarStates } from '@/context/models/calendar/protocols/calendar.model'
import { RootState, AppDispatch } from '@/context/store'
import ChevronIcon from '../../atoms/icons/ChevronIcon'
import * as style from './stylesheet'

const CalendarHeader: React.FC = () => {
  const { setCalendarDate } = calendarActions

  const calendarDate = useSelector<RootState, CalendarStates['calendarDate']>((state) => state.calendar.calendarDate)
  const dispatch = useDispatch<AppDispatch>()

  // Methods
  const handleNextMonth = (): void => {
    dispatch(setCalendarDate(DateTime.fromMillis(calendarDate).plus({ months: 1 }).toMillis()))
  }

  const handlePreviousMonth = (): void => {
    dispatch(setCalendarDate(DateTime.fromMillis(calendarDate).minus({ months: 1 }).toMillis()))
  }

  return (
    <div className={style.calendarHeader} data-testid="calendar-header">
      <ChevronIcon color="white" direction="left" onClick={handlePreviousMonth} />

      <span className={style.calendarHeaderDate} data-testid="calendar-header-date">
        {writeMonthYear(DateTime.fromMillis(calendarDate).monthLong, DateTime.fromMillis(calendarDate).year)}
      </span>

      <ChevronIcon color="white" direction="right" onClick={handleNextMonth} />
    </div>
  )
}

export default CalendarHeader
