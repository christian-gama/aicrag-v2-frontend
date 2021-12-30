import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/application/models/calendar'
import { CalendarStates } from '@/application/models/calendar/protocols/calendar.model'
import { AppDispatch, RootState } from '@/application/store'
import Button from '../../../../UI/Button'
import CalendarTimer from '../CalendarTimer'
import { calendarFooterClasses } from './CalendarFooter.css'
import onCancelHandler from './methods/onCancelHandler'
import onConfirmHandler from './methods/onConfirmHandler'

const CalendarFooter: React.FC = () => {
  const { resetCalendar, closeCalendar, saveCalendar } = calendarActions

  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, CalendarStates['selectedDate']>((state) => state.calendar.selectedDate)

  return (
    <div className={calendarFooterClasses.calendarFooterStyle} data-testid="calendar-footer">
      <CalendarTimer />

      <div className={calendarFooterClasses.calendarButtonContainer}>
        <Button
          testid="cancel-button"
          style={{ mode: 'text', size: 'sm' }}
          onClick={() => onCancelHandler({ closeCalendar, dispatch, resetCalendar })}
        >
          Cancelar
        </Button>

        <span style={{ marginLeft: '1.2rem' }} />

        <Button
          testid="confirm-button"
          style={{ mode: 'contained', size: 'sm' }}
          onClick={() => onConfirmHandler({ closeCalendar, dispatch, saveCalendar, selectedDate })}
        >
          Salvar
        </Button>
      </div>
    </div>
  )
}

export default CalendarFooter
