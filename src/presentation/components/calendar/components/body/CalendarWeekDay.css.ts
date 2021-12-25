import { style } from '@vanilla-extract/css'
import { vars } from '@/presentation/styles/vars.css'

const calendarWeekDayStyle = style({
  fontSize: vars.font.hint.fontSize,
  fontFamily: vars.font.hint.fontFamily,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '0.8rem'
})

export default calendarWeekDayStyle
