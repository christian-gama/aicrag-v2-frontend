import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const showingUpStyle = style({
  display: 'block',
  fontSize: vars.font.hint.fontSize,
  fontFamily: vars.font.hint.fontFamily,
  marginBottom: '0.8rem'
})
