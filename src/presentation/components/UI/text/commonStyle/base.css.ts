import { style } from '@vanilla-extract/css'
import { vars } from '@/presentation/styles/vars.css'

export const baseStyle = style({
  color: vars.colors.text.default,
  lineHeight: 1.5
})
