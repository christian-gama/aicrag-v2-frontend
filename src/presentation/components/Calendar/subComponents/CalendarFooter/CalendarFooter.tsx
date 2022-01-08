import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/application/models/redux/calendar'
import { CalendarStates } from '@/application/models/redux/calendar/protocols/calendar.model'
import { AppDispatch, RootState } from '@/application/store'
import CalendarButtonWrapper from '../CalendarButtonWrapper'
import CalendarTimer from '../CalendarTimer'
import onCancelHandler from './methods/onCancelHandler'
import onConfirmHandler from './methods/onConfirmHandler'
import * as style from './stylesheet'

const CalendarFooter: React.FC = () => {
  const { closeCalendar, saveCalendar } = calendarActions

  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, CalendarStates['selectedDate']>((state) => state.calendar.selectedDate)
  const previousDate = useSelector<RootState, CalendarStates['previousDate']>((state) => state.calendar.previousDate)

  return (
    <div className={style.calendarFooter} data-testid="calendar-footer">
      <CalendarTimer />

      <CalendarButtonWrapper
        onCancelHandler={() => onCancelHandler({ dispatch, previousDate, ...calendarActions })}
        onConfirmHandler={() => onConfirmHandler({ closeCalendar, dispatch, saveCalendar, selectedDate })}
      />
    </div>
  )
}

export default CalendarFooter
