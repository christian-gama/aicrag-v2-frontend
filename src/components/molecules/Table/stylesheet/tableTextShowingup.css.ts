import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const tableSpanShowingup = style({
  display: 'block',
  fontSize: vars.font.hint.fontSize,
  fontFamily: vars.font.hint.fontFamily,
  marginBottom: '0.8rem'
})
