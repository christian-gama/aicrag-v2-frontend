import { CalendarDays } from './CalendarDays'
import { CalendarWeekday } from './CalendarWeekday'
import * as classes from './stylesheet'

export const CalendarBody: React.FC = () => {
  return (
    <div className={classes.calendarBody} data-testid="calendar-body">
      <CalendarWeekday />

      <CalendarDays />
    </div>
  )
}
