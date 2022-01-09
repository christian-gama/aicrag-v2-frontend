import React from 'react'
import Button from '../../atoms/Button'
import CalendarButtonWrapperProps from './protocols/CalendarButtonWrapper.model'
import * as style from './stylesheet'

const CalendarButtonWrapper: React.FC<CalendarButtonWrapperProps> = (props) => {
  const { onCancelHandler, onConfirmHandler } = props

  return (
    <div className={style.calendarButtonWrapper}>
      <Button
        testid="calendar-cancel-button"
        style={{ mode: 'outlined', size: 'sm', color: 'light' }}
        onClick={onCancelHandler}
      >
        Cancelar
      </Button>

      <span style={{ marginLeft: '1.2rem' }} />

      <Button testid="calendar-confirm-button" style={{ mode: 'contained', size: 'sm' }} onClick={onConfirmHandler}>
        Salvar
      </Button>
    </div>
  )
}

export default CalendarButtonWrapper
