import { style } from '@vanilla-extract/css'
import { vars } from '@/presentation/styles/vars.css'

const calendarWeekDayStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: '1.2rem'
})

const calendarDaySpanStyle = style({
  fontSize: vars.font.hint.fontSize,
  fontFamily: vars.font.hint.fontFamily,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const calendarBodyStyle = style({
  display: 'grid',
  gridAutoRows: '50px',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: '28px',
  height: '100%',
  width: '100%',
  padding: '1.2rem 3.2rem'
})

export const calendarBodyClasses = {
  calendarWeekDayStyle,
  calendarDaySpanStyle,
  calendarBodyStyle
}
