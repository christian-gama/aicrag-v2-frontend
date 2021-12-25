import writeMonthYear from '@/utils/writeMonthYear'
import { DateTime } from 'luxon'
import React from 'react'
import ChevronIcon from '../../../icons/chevron/ChevronIcon'
import { CalendarHeaderClasses } from './CalendarHeader.css'

interface CalendarHeaderProps {
  calendarDate: DateTime
  setCalendarDate: React.Dispatch<React.SetStateAction<DateTime>>
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ calendarDate, setCalendarDate }) => {
  // Methods
  const handleNextMonth = (): void => {
    setCalendarDate(calendarDate.plus({ months: 1 }))
  }

  const handlePreviousMonth = (): void => {
    setCalendarDate(calendarDate.minus({ months: 1 }))
  }

  return (
    <div className={CalendarHeaderClasses.calendarHeaderStyle} data-testid="calendar-header">
      <ChevronIcon color="white" direction="left" onClick={handlePreviousMonth} />

      <span className={CalendarHeaderClasses.headerDateStyle} data-testid="calendar-header-date">
        {writeMonthYear(calendarDate.monthLong, calendarDate.year)}
      </span>

      <ChevronIcon color="white" direction="right" onClick={handleNextMonth} />
    </div>
  )
}

export default CalendarHeader
