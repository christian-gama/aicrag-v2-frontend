import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const containedMainStyle = style({
  backgroundColor: vars.colors['secondary-600'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['secondary-700'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['secondary-100']}`
  }
})

export const outlinedMainStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['secondary-600']}`,
  color: vars.colors['secondary-600'],

  ':hover': {
    backgroundColor: vars.colors['secondary-600'],
    border: 'none',
    color: vars.colors.white,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['secondary-100']}`
  }
})
