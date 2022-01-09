import { CalendarDayNumberVariants } from '../stylesheet'

type CalendarDayNumberProps = {
  onClick?: (dayNumber: number) => void
  dimmed?: CalendarDayNumberVariants['dimmed']
  selected?: CalendarDayNumberVariants['selected']
  testid?: string
  dayNumber: number
}

export default CalendarDayNumberProps
