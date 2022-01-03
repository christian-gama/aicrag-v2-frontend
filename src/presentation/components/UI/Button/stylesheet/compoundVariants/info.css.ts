import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const containedInfoStyle = style({
  backgroundColor: vars.colors['info-300'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['info-400'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['info-100']}`
  }
})

export const outlinedInfoStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['info-300']}`,
  color: vars.colors['info-300'],

  ':hover': {
    backgroundColor: vars.colors['info-300'],
    border: 'none',
    color: vars.colors.white,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['info-100']}`
  }
})
