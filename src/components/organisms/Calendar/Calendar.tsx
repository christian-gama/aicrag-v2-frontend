import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/context/models/calendar'
import { AppDispatch, RootState } from '@/context/store'
import { Modal } from '@/components/molecules/Modal'
import { CalendarBody } from './CalendarBody'
import { CalendarFooter } from './CalendarFooter'
import { CalendarHeader } from './CalendarHeader'
import * as classes from './stylesheet'

type CalendarProps = {
  previousDate: number
}

export const Calendar: React.FC<CalendarProps> = ({ previousDate }) => {
  const { resetCalendar, closeCalendar } = calendarActions

  const dispatch = useDispatch<AppDispatch>()
  const isCalendarOpen = useSelector<RootState, boolean>(
    (state) => state.calendar.isCalendarOpen
  )

  useEffect(() => {
    dispatch(resetCalendar(previousDate))
  }, [])

  return (
    <Modal
      onDismiss={() => {
        dispatch(resetCalendar(previousDate))
        dispatch(closeCalendar())
      }}
      isOpen={isCalendarOpen}
    >
      <div className={classes.calendar} data-testid="calendar-wrapper">
        <CalendarHeader />

        <CalendarBody />

        <CalendarFooter />
      </div>
    </Modal>
  )
}
