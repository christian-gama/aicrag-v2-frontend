import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const inputError = style({
  color: vars.colors['danger-400'],
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize,
  marginLeft: '0.4rem',
  marginTop: '0.4rem'
})
