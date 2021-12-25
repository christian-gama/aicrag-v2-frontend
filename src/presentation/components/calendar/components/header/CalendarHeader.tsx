import writeMonthYear from '@/utils/writeMonthYear'
import { DateTime } from 'luxon'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/infra/store'
import { setCalendarDate } from '../../../../../infra/store/calendarReducer'
import ChevronIcon from '../../../icons/chevron/ChevronIcon'
import { CalendarHeaderClasses } from './CalendarHeader.css'

const CalendarHeader: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const calendarDate = useSelector<RootState, number>((state) => state.calendar.calendarDate)

  // Methods
  const handleNextMonth = (): void => {
    dispatch(setCalendarDate(DateTime.fromMillis(calendarDate).plus({ months: 1 }).toMillis()))
  }

  const handlePreviousMonth = (): void => {
    dispatch(setCalendarDate(DateTime.fromMillis(calendarDate).minus({ months: 1 }).toMillis()))
  }

  return (
    <div className={CalendarHeaderClasses.calendarHeaderStyle} data-testid="calendar-header">
      <ChevronIcon color="white" direction="left" onClick={handlePreviousMonth} />

      <span className={CalendarHeaderClasses.headerDateStyle} data-testid="calendar-header-date">
        {writeMonthYear(DateTime.fromMillis(calendarDate).monthLong, DateTime.fromMillis(calendarDate).year)}
      </span>

      <ChevronIcon color="white" direction="right" onClick={handleNextMonth} />
    </div>
  )
}

export default CalendarHeader
