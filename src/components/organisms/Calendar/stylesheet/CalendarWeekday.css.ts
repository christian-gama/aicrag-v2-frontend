import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const calendarWeekday = style({
  alignItems: 'center',
  display: 'flex',
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize,
  justifyContent: 'center',
  marginBottom: '0.8rem'
})
