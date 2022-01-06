import { CalendarDayVariants } from './stylesheet/recipes/dayRecipe.css'

type CalendarDayNumberProps = {
  onClick?: (dayNumber: number) => void
  dimmed?: CalendarDayVariants['dimmed']
  selected?: CalendarDayVariants['selected']
  testid?: string
  dayNumber: number
}

export default CalendarDayNumberProps
