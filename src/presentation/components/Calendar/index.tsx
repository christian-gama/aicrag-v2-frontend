import React from 'react'
import Modal from '../UI/Modal'
import { calendarClasses } from './Calendar.css'
import CalendarProps from './Calendar.model'

const Calendar: React.FC<CalendarProps> = (props) => {
  const { onDismiss, isCalendarOpen, children } = props

  return (
    <Modal onDismiss={onDismiss} isOpen={isCalendarOpen}>
      <div className={calendarClasses.wrapperStyle} data-testid="calendar-container">
        {children}
      </div>
    </Modal>
  )
}

export default Calendar