import React from 'react'
import * as style from './stylesheet'

const CalendarFooter: React.FC = (props) => {
  const { children } = props

  return (
    <div className={style.calendarFooter} data-testid="calendar-footer">
      {children}
    </div>
  )
}

export default CalendarFooter
