import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const menuIconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
  width: '4.8rem',
  height: '4.8rem',
  backgroundColor: vars.colors.white
})

export const menuIcon = style({
  width: '2.4rem',
  fill: vars.colors['navy-500'],

  ':hover': {
    fill: vars.colors['navy-800']
  }
})
