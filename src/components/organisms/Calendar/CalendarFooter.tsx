import { CalendarButtonWrapper } from './CalendarButtonWrapper'
import { CalendarTimer } from './CalendarTimer'
import { useCalendarFooter } from './hooks'
import * as classes from './stylesheet'

export const CalendarFooter: React.FC = () => {
  const { onCancelHandler, onConfirmHandler } = useCalendarFooter()

  return (
    <div className={classes.calendarFooter} data-testid="calendar-footer">
      <CalendarTimer />

      <CalendarButtonWrapper
        onConfirmHandler={() => onConfirmHandler()}
        onCancelHandler={() => onCancelHandler()}
      />
    </div>
  )
}
