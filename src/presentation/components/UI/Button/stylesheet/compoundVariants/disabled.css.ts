import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const containedDisabledStyle = style({
  backgroundColor: vars.colors['gray-500'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['gray-500'],
    cursor: 'not-allowed'
  }
})

export const outlinedDisabledStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['gray-600']}`,
  color: vars.colors['gray-600'],

  ':hover': {
    backgroundColor: vars.colors.transparent,
    border: `1px solid ${vars.colors['gray-600']}`,
    color: vars.colors['gray-600'],
    cursor: 'not-allowed'
  }
})
