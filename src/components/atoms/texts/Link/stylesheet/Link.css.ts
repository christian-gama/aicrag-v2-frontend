import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const link = style({
  color: vars.colors['cyan-900'],
  fontSize: vars.font.hint.fontSize,
  fontFamily: vars.font.hint.fontFamily,
  transition: 'color 0.2s ease-in-out',

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
