import { CalendarDayNumberVariants } from './stylesheet'
import * as classes from './stylesheet'

type CalendarDayNumberProps = {
  selected?: CalendarDayNumberVariants['selected']
  dimmed?: CalendarDayNumberVariants['dimmed']
  onClick?: (dayNumber: number) => void
  dayNumber: number
  testid?: string
}

export const CalendarDayNumber: React.FC<CalendarDayNumberProps> = ({
  dayNumber,
  selected,
  onClick,
  dimmed,
  testid
}) => {
  return (
    <span
      className={classes.calendarDayNumberRecipe({
        selected: !!selected,
        dimmed: !!dimmed
      })}
      onClick={() => {
        if (onClick && !dimmed) {
          onClick(dayNumber)
        }
      }}
      data-selected={selected}
      data-testid={testid}
    >
      {dayNumber}
    </span>
  )
}
