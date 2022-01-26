import React from 'react'
import Button from '../../atoms/Button'
import * as style from './stylesheet'

type CalendarButtonWrapperProps = {
  onConfirmHandler: () => void
  onCancelHandler: () => void
}

const CalendarButtonWrapper: React.FC<CalendarButtonWrapperProps> = ({
  onConfirmHandler,
  onCancelHandler
}) => {
  return (
    <div className={style.calendarButtonWrapper}>
      <Button
        style={{ mode: 'outlined', size: 'sm', color: 'light' }}
        testid="calendar-cancel-button"
        onClick={onCancelHandler}
      >
        Cancelar
      </Button>

      <span style={{ marginLeft: '1.2rem' }} />

      <Button
        style={{ mode: 'contained', size: 'sm' }}
        testid="calendar-confirm-button"
        onClick={onConfirmHandler}
      >
        Salvar
      </Button>
    </div>
  )
}

export default CalendarButtonWrapper
