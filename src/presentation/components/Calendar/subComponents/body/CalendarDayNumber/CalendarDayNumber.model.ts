import { CalendarDayVariants } from './CalendarDayNumber.css'

type CalendarDayNumberProps = {
  onClick?: (day: number) => void
  dimmed?: CalendarDayVariants['dimmed']
  selected?: CalendarDayVariants['selected']
  testid?: string
}

export default CalendarDayNumberProps
