import { Button } from '@/components/atoms/Button'
import * as classes from './stylesheet'

type CalendarButtonWrapperProps = {
  onConfirmHandler: () => void
  onCancelHandler: () => void
}

export const CalendarButtonWrapper: React.FC<CalendarButtonWrapperProps> = ({
  onConfirmHandler,
  onCancelHandler
}) => {
  return (
    <div className={classes.calendarButtonWrapper}>
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
