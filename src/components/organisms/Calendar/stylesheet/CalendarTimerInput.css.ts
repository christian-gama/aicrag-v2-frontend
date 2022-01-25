import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const calendarTimerInput = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.1s linear, border 0.1s linear',
  border: `1px solid ${vars.colors['cyan-600']}`,
  borderRadius: '5px',
  backgroundColor: vars.colors.white,
  width: '50%',
  height: '4rem',
  textAlign: 'center',

  ':active': {
    transform: 'scale(1.2)',
    outline: 'none',
    border: `2px solid ${vars.colors['cyan-600']}`
  },

  ':focus': {
    transform: 'scale(1.2)',
    outline: 'none',
    border: `2px solid ${vars.colors['cyan-600']}`
  }
})
