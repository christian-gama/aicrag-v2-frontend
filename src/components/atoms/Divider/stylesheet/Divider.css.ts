import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const divider = style({
  width: '100%',
  height: '2px',
  backgroundColor: vars.colors['gray-100']
})
