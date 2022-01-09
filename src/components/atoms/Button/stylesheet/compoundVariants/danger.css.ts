import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const containedDangerStyle = style({
  backgroundColor: vars.colors['danger-400'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['danger-700'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['danger-50']}`
  }
})

export const outlinedDangerStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['danger-400']}`,
  color: vars.colors['danger-400'],

  ':hover': {
    backgroundColor: vars.colors['danger-400'],
    border: 'none',
    color: vars.colors.white,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['danger-50']}`
  }
})
