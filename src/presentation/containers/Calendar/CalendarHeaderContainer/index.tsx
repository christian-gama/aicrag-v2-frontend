import { DateTime } from 'luxon'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calendarActions } from '@/application/models/redux/calendar'
import { CalendarStates } from '@/application/models/redux/calendar/protocols/calendar.model'
import { RootState, AppDispatch } from '@/application/store'
import writeMonthYear from '@/application/utils/writeMonthYear'
import CalendarHeader from '@/presentation/components/Calendar/subComponents/header/CalendarHeader'
import CalendarHeaderDate from '@/presentation/components/Calendar/subComponents/header/CalendarHeaderDate'
import ChevronIcon from '../../../components/UI/icons/Chevron'

const CalendarHeaderContainer: React.FC = () => {
  const { setCalendarDate } = calendarActions

  const calendarDate = useSelector<RootState, CalendarStates['calendarDate']>((state) => state.calendar.calendarDate)
  const dispatch = useDispatch<AppDispatch>()

  // Methods
  const handleNextMonth = (): void => {
    dispatch(setCalendarDate(DateTime.fromMillis(calendarDate).plus({ months: 1 }).toMillis()))
  }

  const handlePreviousMonth = (): void => {
    dispatch(setCalendarDate(DateTime.fromMillis(calendarDate).minus({ months: 1 }).toMillis()))
  }

  return (
    <CalendarHeader>
      <ChevronIcon color="white" direction="left" onClick={handlePreviousMonth} />

      <CalendarHeaderDate
        monthAndYear={writeMonthYear(
          DateTime.fromMillis(calendarDate).monthLong,
          DateTime.fromMillis(calendarDate).year
        )}
      />

      <ChevronIcon color="white" direction="right" onClick={handleNextMonth} />
    </CalendarHeader>
  )
}

export default CalendarHeaderContainer
