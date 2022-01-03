import { CalendarDayVariants } from './stylesheet/dayRecipe.css'

type CalendarDayNumberProps = {
  onClick?: (dayNumber: number) => void
  dimmed?: CalendarDayVariants['dimmed']
  selected?: CalendarDayVariants['selected']
  testid?: string
  dayNumber: number
}

export default CalendarDayNumberProps
