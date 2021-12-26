import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/infra/store'
import { closeModal } from '@/infra/store/modal'
import Button from '../../../UI/button/Button'
import { calendarFooterClasses } from './CalendarFooter.css'
import CalendarTimer from './CalendarTimer'

export const CalendarFooter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  const cancelHandler = (): void => {
    dispatch(closeModal())
  }

  const confirmHandler = (): void => {
    dispatch(closeModal())
  }

  return (
    <div className={calendarFooterClasses.calendarFooterStyle} data-testid="calendar-footer">
      <CalendarTimer />

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
