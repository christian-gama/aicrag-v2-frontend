import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const containedCyanStyle = style({
  backgroundColor: vars.colors['cyan-600'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['cyan-900'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['cyan-100']}`
  }
})

export const outlinedCyanStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['cyan-600']}`,
  color: vars.colors['cyan-600'],

  ':hover': {
    backgroundColor: vars.colors['cyan-600'],
    border: 'none',
    color: vars.colors.white,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['cyan-100']}`
  }
})
