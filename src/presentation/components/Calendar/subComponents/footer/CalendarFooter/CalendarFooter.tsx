import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/infra/store'
import { makeActions } from '@/infra/store/utils/makeActions'
import Button from '../../../../UI/Button'
import CalendarTimer from '../CalendarTimer'
import { calendarFooterClasses } from './CalendarFooter.css'
import CalendarFooterProps from './CalendarFooter.model'

const CalendarFooter: React.FC<CalendarFooterProps> = (props) => {
  const { resetCalendar, closeCalendar, saveCalendar } = makeActions(props.name)

  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, number>((state) => state[props.name].selectedDate)

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
      <CalendarTimer name={props.name} validation={props.validation} />

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

export default CalendarFooter
