import { DateTime } from 'luxon'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeActions } from '@/application/plugins/makeActions'
import { RootState, AppDispatch } from '@/application/store'
import ChevronIcon from '../../../../UI/icons/Chevron'
import CalendarHeaderDate from '../CalendarHeaderDate'
import { CalendarHeaderClasses } from './CalendarHeader.css'
import CalendarHeaderProps from './CalendarHeader.model'

const CalendarHeader: React.FC<CalendarHeaderProps> = (props) => {
  const { setCalendarDate } = makeActions(props.name)

  const calendarDate = useSelector<RootState, number>((state) => state[props.name].calendarDate)
  const dispatch = useDispatch<AppDispatch>()

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

      <CalendarHeaderDate calendarDate={calendarDate} />

      <ChevronIcon color="white" direction="right" onClick={handleNextMonth} />
    </div>
  )
}

export default CalendarHeader
