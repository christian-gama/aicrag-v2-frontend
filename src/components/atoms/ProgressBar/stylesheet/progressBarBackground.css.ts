import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const progressBarBackground = style({
  backgroundColor: vars.colors['gray-100'],
  height: '100%',
  width: '100%'
})
