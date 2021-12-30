import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeActions } from '@/application/plugins/makeActions'
import { AppDispatch, RootState } from '@/application/store'
import Modal from '../UI/Modal'
import { calendarClasses } from './Calendar.css'
import CalendarProps from './Calendar.model'
import CalendarBody from './subComponents/body/CalendarBody'
import CalendarFooter from './subComponents/footer/CalendarFooter'
import CalendarHeader from './subComponents/header/CalendarHeader/CalendarHeader'

const Calendar: React.FC<CalendarProps> = (props) => {
  const { setPreviousDate, resetCalendar, closeCalendar } = makeActions(props.name)

  const dispatch = useDispatch<AppDispatch>()
  const isCalendarOpen = useSelector<RootState, boolean>((state) => state[props.name].isCalendarOpen)
  const selectedDate = useSelector<RootState, number>((state) => state[props.name].selectedDate)

  useEffect(() => {
    // TODO: Probably should set the previous state using the value from input
    dispatch(setPreviousDate(selectedDate))
  }, [])

  return (
    <Modal
      onDismiss={() => {
        dispatch(resetCalendar())
        dispatch(closeCalendar())
      }}
      isOpen={isCalendarOpen}
    >
      <div className={calendarClasses.calendarContainerStyle} data-testid="calendar-container">
        <CalendarHeader name={props.name} />

        <CalendarBody name={props.name} />

        <CalendarFooter name={props.name} validation={props.validation} />
      </div>
    </Modal>
  )
}

export default Calendar
