import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const baseStyle = style({
  color: vars.colors.text.default,
  lineHeight: 1.5
})
