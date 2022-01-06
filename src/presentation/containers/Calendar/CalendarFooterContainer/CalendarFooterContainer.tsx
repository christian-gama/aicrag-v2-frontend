import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/application/models/redux/calendar'
import { CalendarStates } from '@/application/models/redux/calendar/protocols/calendar.model'
import { AppDispatch, RootState } from '@/application/store'
import CalendarButtonWrapper from '@/presentation/components/Calendar/subComponents/CalendarButtonWrapper'
import CalendarFooter from '@/presentation/components/Calendar/subComponents/CalendarFooter'
import CalendarTimerWrapperContainer from '../CalendarTimerWrapperContainer/CalendarTimerWrapperContainer'
import onCancelHandler from './methods/onCancelHandler'
import onConfirmHandler from './methods/onConfirmHandler'

const CalendarFooterContainer: React.FC = () => {
  const { closeCalendar, saveCalendar } = calendarActions

  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, CalendarStates['selectedDate']>((state) => state.calendar.selectedDate)
  const previousDate = useSelector<RootState, CalendarStates['previousDate']>((state) => state.calendar.previousDate)

  return (
    <CalendarFooter>
      <CalendarTimerWrapperContainer />

      <CalendarButtonWrapper
        onCancelHandler={() => onCancelHandler({ dispatch, previousDate, ...calendarActions })}
        onConfirmHandler={() => onConfirmHandler({ closeCalendar, dispatch, saveCalendar, selectedDate })}
      />
    </CalendarFooter>
  )
}

export default CalendarFooterContainer