import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const divider = style({
  backgroundColor: vars.colors['gray-100'],
  width: '100%',
  height: '2px'
})
