import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const forgotPassword = style({
  color: vars.colors.text.default,
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize,
  marginTop: '2rem'
})
