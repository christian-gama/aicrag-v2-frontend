import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const link = style({
  transition: 'color 0.2s ease-in-out',
  color: vars.colors['cyan-900'],
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize,

  ':hover': {
    color: vars.colors['cyan-600']
  },

  ':focus': {
    color: vars.colors['cyan-600']
  },

  ':active': {
    color: vars.colors['cyan-600']
  }
})
