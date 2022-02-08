import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const penIcon = style({
  width: '1.8rem',
  fill: vars.colors['cyan-500'],
  transition: 'fill 0.2s ease-in-out',

  ':hover': {
    fill: vars.colors['cyan-800']
  }
})
