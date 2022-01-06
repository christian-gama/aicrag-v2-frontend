import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const weekday = style({
  alignItems: 'center',
  display: 'flex',
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize,
  justifyContent: 'center',
  marginBottom: '0.8rem'
})
