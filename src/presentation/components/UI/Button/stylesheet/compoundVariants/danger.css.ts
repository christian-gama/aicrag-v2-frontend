import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const containedDangerStyle = style({
  backgroundColor: vars.colors['danger-300'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['danger-400'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['danger-100']}`
  }
})

export const outlinedDangerStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['danger-300']}`,
  color: vars.colors['danger-300'],

  ':hover': {
    backgroundColor: vars.colors['danger-300'],
    border: 'none',
    color: vars.colors.white,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['danger-100']}`
  }
})
