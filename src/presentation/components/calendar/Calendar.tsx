import React from 'react'
import { calendarClasses } from './Calendar.css'
import { CalendarBody } from './components/body/CalendarBody'
import { CalendarFooter } from './components/footer/CalendarFooter'
import CalendarHeader from './components/header/CalendarHeader'

const Calendar: React.FC = () => {
  return (
    <div className={calendarClasses.calendarContainerStyle} data-testid="calendar-container">
      <CalendarHeader />

      <CalendarBody />

      <CalendarFooter />
    </div>
  )
}

export default Calendar
