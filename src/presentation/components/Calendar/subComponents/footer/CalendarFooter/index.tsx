import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeActions } from '@/application/plugins/makeActions'
import { AppDispatch, RootState } from '@/application/store'
import Button from '../../../../UI/Button'
import CalendarTimer from '../CalendarTimer'
import { calendarFooterClasses } from './CalendarFooter.css'
import CalendarFooterProps from './CalendarFooter.model'
import onCancelHandler from './handlers/onCancelHandler'
import onConfirmHandler from './handlers/onConfirmHandler'

const CalendarFooter: React.FC<CalendarFooterProps> = (props) => {
  const { resetCalendar, closeCalendar, saveCalendar } = makeActions(props.name)

  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, number>((state) => state[props.name].selectedDate)

  return (
    <div className={calendarFooterClasses.calendarFooterStyle} data-testid="calendar-footer">
      <CalendarTimer name={props.name} validation={props.validation} />

      <div className={calendarFooterClasses.calendarButtonContainer}>
        <Button
          testid="cancel-button"
          style={{ mode: 'text', size: 'sm' }}
          onClick={() => onCancelHandler(props, { closeCalendar, dispatch, resetCalendar })}
        >
          Cancelar
        </Button>

        <span style={{ marginLeft: '1.2rem' }} />

        <Button
          testid="confirm-button"
          style={{ mode: 'contained', size: 'sm' }}
          onClick={() => onConfirmHandler(props, { closeCalendar, dispatch, saveCalendar, selectedDate })}
        >
          Salvar
        </Button>
      </div>
    </div>
  )
}

export default CalendarFooter
