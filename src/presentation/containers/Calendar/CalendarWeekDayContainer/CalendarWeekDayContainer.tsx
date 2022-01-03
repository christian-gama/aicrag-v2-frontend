import React from 'react'
import CalendarWeekDay from '@/presentation/components/Calendar/subComponents/body/CalendarWeekDay'

const CalendarWeekDayContainer: React.FC = () => {
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

  return (
    <>
      {weekDays.map((weekDay) => (
        <CalendarWeekDay key={weekDay} weekDay={weekDay} />
      ))}
    </>
  )
}

export default CalendarWeekDayContainer
