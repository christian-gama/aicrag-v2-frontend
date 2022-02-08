import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const trashIcon = style({
  width: '1.6rem',
  fill: vars.colors['danger-500'],
  transition: 'fill 0.2s ease-in-out',

  ':hover': {
    fill: vars.colors['danger-800']
  }
})
