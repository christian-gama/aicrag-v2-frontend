import React from 'react'
import Calendar from '@/presentation/components/calendar/Calendar'
import makeTimerValidator from '../validation/makeTimerValidator'

const makeCalendar: React.FC = () => {
  return <Calendar validation={makeTimerValidator()} />
}

export default makeCalendar
