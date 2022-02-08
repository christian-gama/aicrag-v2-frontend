import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const calendarTimerInput = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.1s linear, border 0.1s linear',
  border: `1px solid ${vars.colors['cyan-600']}`,
  backgroundColor: vars.colors.white,
  width: '50%',
  height: '4rem',
  textAlign: 'center',

  selectors: {
    '&:first-of-type': {
      borderRadius: '5px 0 0 5px'
    },

    '&:last-of-type': {
      borderRadius: '0 5px 5px 0'
    }
  },

  ':active': {
    borderRadius: '5px !important',
    transform: 'scale(1.2)',
    outline: 'none',
    border: `2px solid ${vars.colors['cyan-600']}`
  },

  ':focus': {
    borderRadius: '5px !important',
    transform: 'scale(1.2)',
    outline: 'none',
    border: `2px solid ${vars.colors['cyan-600']}`
  }
})
