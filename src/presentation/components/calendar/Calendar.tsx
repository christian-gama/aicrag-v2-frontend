import { DateTime } from 'luxon'
import React, { useState } from 'react'
import { calendarClasses } from './Calendar.css'
import { CalendarBody } from './components/body/CalendarBody'
import { CalendarFooter } from './components/footer/CalendarFooter'
import CalendarHeader from './components/header/CalendarHeader'

const Calendar: React.FC = () => {
  const dateBrazil = DateTime.now()

  // Hooks
  const [calendarDate, setCalendarDate] = useState(dateBrazil)

  return (
    <div className={calendarClasses.calendarContainerStyle} data-testid="calendar-container">
      <CalendarHeader calendarDate={calendarDate} setCalendarDate={setCalendarDate} />

      <CalendarBody calendarDate={calendarDate} />

      <CalendarFooter />
    </div>
  )
}

export default Calendar
