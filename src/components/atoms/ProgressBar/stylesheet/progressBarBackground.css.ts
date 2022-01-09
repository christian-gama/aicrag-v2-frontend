import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const progressBarBackground = style({
  backgroundColor: vars.colors['gray-100'],
  height: '100%',
  width: '100%'
})
