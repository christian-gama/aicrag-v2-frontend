import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IValidation from '@/domain/validation/validation.model'
import { AppDispatch, RootState } from '@/infra/store'
import { ICalendar, makeCalendarSlice } from '@/infra/store/calendar'
import Button from '../../../UI/button/Button'
import { calendarFooterClasses } from './CalendarFooter.css'
import CalendarTimer from './CalendarTimer'

type CalendarFooterProps = {
  name: ICalendar['name']
  validation: IValidation
}

export const CalendarFooter: React.FC<CalendarFooterProps> = ({ validation, name }) => {
  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, number>((state) => state[name].selectedDate)
  const { resetCalendar, closeCalendar, saveCalendar } = makeCalendarSlice(name).actions

  const cancelHandler = (): void => {
    dispatch(resetCalendar())
    dispatch(closeCalendar())
  }

  const confirmHandler = (): void => {
    dispatch(saveCalendar(selectedDate))
    dispatch(closeCalendar())
  }

  return (
    <div className={calendarFooterClasses.calendarFooterStyle} data-testid="calendar-footer">
      <CalendarTimer name={name} validation={validation} />

      <div className={calendarFooterClasses.calendarButtonContainer}>
        <Button testid="cancel-button" style={{ mode: 'text', size: 'sm' }} onClick={cancelHandler}>
          Cancelar
        </Button>

        <span style={{ marginLeft: '1.2rem' }} />

        <Button testid="confirm-button" style={{ mode: 'contained', size: 'sm' }} onClick={confirmHandler}>
          Salvar
        </Button>
      </div>
    </div>
  )
}
