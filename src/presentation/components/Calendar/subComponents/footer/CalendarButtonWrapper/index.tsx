import React from 'react'
import Button from '@/presentation/components/UI/Button'
import { calendarButtonClasses } from './CalendarButtonWrapper.css'
import CalendarButtonWrapperProps from './CalendarButtonWrapperProps.model'

const CalendarButtonWrapper: React.FC<CalendarButtonWrapperProps> = (props) => {
  const { onCancelHandler, onConfirmHandler } = props

  return (
    <div className={calendarButtonClasses.wrapper}>
      <Button testid="cancel-button" style={{ mode: 'text', size: 'sm' }} onClick={onCancelHandler}>
        Cancelar
      </Button>

      <span style={{ marginLeft: '1.2rem' }} />

      <Button testid="confirm-button" style={{ mode: 'contained', size: 'sm' }} onClick={onConfirmHandler}>
        Salvar
      </Button>
    </div>
  )
}

export default CalendarButtonWrapper
