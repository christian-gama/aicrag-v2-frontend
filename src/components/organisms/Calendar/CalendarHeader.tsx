import { DateTime } from 'luxon'
import { useSelector, useDispatch } from 'react-redux'
import { writeMonthYear } from '@/helpers'
import { calendarActions, CalendarStates } from '@/context/models/calendar'
import { RootState, AppDispatch } from '@/context/store'
import { ChevronIcon } from '@/components/utils/icons'
import * as classes from './stylesheet'

export const CalendarHeader: React.FC = () => {
  const { setCalendarDate } = calendarActions

  const calendarDate = useSelector<RootState, CalendarStates['calendarDate']>(
    (state) => state.calendar.calendarDate
  )
  const dispatch = useDispatch<AppDispatch>()

  const handleNextMonth = (): void => {
    dispatch(
      setCalendarDate(
        DateTime.fromMillis(calendarDate).plus({ months: 1 }).toMillis()
      )
    )
  }

  const handlePreviousMonth = (): void => {
    dispatch(
      setCalendarDate(
        DateTime.fromMillis(calendarDate).minus({ months: 1 }).toMillis()
      )
    )
  }

  return (
    <div className={classes.calendarHeader} data-testid="calendar-header">
      <ChevronIcon
        onClick={handlePreviousMonth}
        direction="left"
        color="white"
      />

      <span
        className={classes.calendarHeaderDate}
        data-testid="calendar-header-date"
      >
        {writeMonthYear(
          DateTime.fromMillis(calendarDate).monthLong,
          DateTime.fromMillis(calendarDate).year
        )}
      </span>

      <ChevronIcon color="white" direction="right" onClick={handleNextMonth} />
    </div>
  )
}
