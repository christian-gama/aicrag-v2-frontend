import React from 'react'
import Modal from '../UI/Modal/Modal'
import CalendarProps from './Calendar.model'
import * as style from './stylesheet'

const Calendar: React.FC<CalendarProps> = (props) => {
  const { onDismiss, isCalendarOpen, children } = props

  return (
    <Modal onDismiss={onDismiss} isOpen={isCalendarOpen}>
      <div className={style.calendar} data-testid="calendar-wrapper">
        {children}
      </div>
    </Modal>
  )
}

export default Calendar
