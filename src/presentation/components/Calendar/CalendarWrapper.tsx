import React from 'react'
import Modal from '../UI/Modal'
import { calendarClasses } from './CalendarWrapper.css'
import CalendarWrapperProps from './CalendarWrapper.model'

const CalendarWrapper: React.FC<CalendarWrapperProps> = (props) => {
  const { onDismiss, isCalendarOpen, children } = props

  return (
    <Modal onDismiss={onDismiss} isOpen={isCalendarOpen}>
      <div className={calendarClasses.calendarContainerStyle} data-testid="calendar-container">
        {children}
      </div>
    </Modal>
  )
}

export default CalendarWrapper
