import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const calendarWeekday = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '0.8rem',
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize
})
