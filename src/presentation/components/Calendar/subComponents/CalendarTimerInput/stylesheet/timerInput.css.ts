import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const timerInput = style({
  alignItems: 'center',
  backgroundColor: vars.colors.white,
  border: `1px solid ${vars.colors['cyan-600']}`,
  borderRadius: '5px',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  textAlign: 'center',
  transition: 'transform 0.1s linear, border 0.1s linear',
  width: '50%',

  ':active': {
    border: `2px solid ${vars.colors['cyan-600']}`,
    outline: 'none',
    transform: 'scale(1.2)'
  },

  ':focus': {
    border: `2px solid ${vars.colors['cyan-600']}`,
    outline: 'none',
    transform: 'scale(1.2)'
  }
})