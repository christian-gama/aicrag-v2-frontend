import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IValidation from '@/domain/validation/validation.model'
import { AppDispatch, RootState } from '@/infra/store'
import { ICalendar, makeCalendarSlice } from '@/infra/store/calendar'
import Modal from '../UI/Modal'
import { calendarClasses } from './Calendar.css'
import { CalendarBody } from './subComponents/body/CalendarBody'
import { CalendarFooter } from './subComponents/footer/CalendarFooter'
import CalendarHeader from './subComponents/header/CalendarHeader'

type CalendarProps = {
  name: ICalendar['name']
  validation: IValidation
}

const Calendar: React.FC<CalendarProps> = ({ validation, name }) => {
  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, number>((state) => state[name].selectedDate)
  const isCalendarOpen = useSelector<RootState, boolean>((state) => state[name].isCalendarOpen)
  const { setPreviousDate, resetCalendar, closeCalendar } = makeCalendarSlice(name).actions

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
        <CalendarHeader name={name} />

        <CalendarBody name={name} />

        <CalendarFooter name={name} validation={validation} />
      </div>
    </Modal>
  )
}

export default Calendar
