import * as classes from './stylesheet'

export const CalendarWeekday: React.FC = () => {
  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

  return (
    <>
      {weekdays.map((weekday) => (
        <span key={weekday} className={classes.calendarWeekday}>
          {weekday}
        </span>
      ))}
    </>
  )
}
