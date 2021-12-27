import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IValidation from '@/domain/validation/validation.model'
import { AppDispatch, RootState } from '@/infra/store'
import { resetCalendar, saveCalendar, closeCalendar } from '@/infra/store/calendar'
import Button from '../../../UI/button/Button'
import { calendarFooterClasses } from './CalendarFooter.css'
import CalendarTimer from './CalendarTimer'

type CalendarFooterProps = {
  validation: IValidation
}

export const CalendarFooter: React.FC<CalendarFooterProps> = ({ validation }) => {
  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, number>((state) => state.calendar.selectedDate)

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
      <CalendarTimer validation={validation} />

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
