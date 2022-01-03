import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const containedLightStyle = style({
  backgroundColor: vars.colors['gray-50'],
  color: vars.colors.text.default,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['gray-100'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['gray-200']}`
  }
})

export const outlinedLightStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['gray-400']}`,
  color: vars.colors['gray-800'],

  ':hover': {
    backgroundColor: vars.colors['gray-50'],
    border: 'none',
    color: vars.colors.text.default,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['gray-200']}`
  }
})
