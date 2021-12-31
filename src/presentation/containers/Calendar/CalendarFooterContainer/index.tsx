import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/application/models/calendar'
import { CalendarStates } from '@/application/models/calendar/protocols/calendar.model'
import { AppDispatch, RootState } from '@/application/store'
import CalendarButtonWrapper from '@/presentation/components/Calendar/subComponents/footer/CalendarButtonWrapper'
import CalendarFooter from '@/presentation/components/Calendar/subComponents/footer/CalendarFooter'
import CalendarTimerWrapperContainer from '../CalendarTimerWrapperContainer'
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
