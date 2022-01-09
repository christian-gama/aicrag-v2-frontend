import React from 'react'
import CalendarButtonWrapper from './CalendarButtonWrapper'
import CalendarTimer from './CalendarTimer'
import useCalendarFooter from './hooks/useCalendarFooter'
import * as style from './stylesheet'

const CalendarFooter: React.FC = () => {
  const { onCancelHandler, onConfirmHandler } = useCalendarFooter()

  return (
    <div className={style.calendarFooter} data-testid="calendar-footer">
      <CalendarTimer />

      <CalendarButtonWrapper onCancelHandler={() => onCancelHandler()} onConfirmHandler={() => onConfirmHandler()} />
    </div>
  )
}

export default CalendarFooter
