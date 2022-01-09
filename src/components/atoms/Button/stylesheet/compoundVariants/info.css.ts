import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const containedInfoStyle = style({
  backgroundColor: vars.colors['info-400'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['info-900'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['info-50']}`
  }
})

export const outlinedInfoStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['info-400']}`,
  color: vars.colors['info-400'],

  ':hover': {
    backgroundColor: vars.colors['info-400'],
    border: 'none',
    color: vars.colors.white,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['info-50']}`
  }
})
