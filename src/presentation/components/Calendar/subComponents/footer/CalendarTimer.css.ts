import { style } from '@vanilla-extract/css'
import { vars } from '@/presentation/styles/vars.css'

const calendarTimerContainerStyle = style({
  display: 'flex',
  alignItems: 'center'
})

const calendarTimerContentStyle = style({
  display: 'flex',
  alignItems: 'center',
  width: '13rem',
  height: '3.2rem',
  marginLeft: '1rem',
  borderRadius: '5px'
})

const calendarTimerHourStyle = style({
  display: 'flex',
  backgroundColor: vars.colors.white,
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  height: '100%',
  borderRadius: '5px',
  border: `1px solid ${vars.colors['secondary-300']}`,
  textAlign: 'center',
  transition: 'transform 0.1s linear, border 0.1s linear',
  ':active': {
    border: `2px solid ${vars.colors['secondary-300']}`,
    transform: 'scale(1.2)',
    outline: 'none'
  },
  ':focus': {
    border: `2px solid ${vars.colors['secondary-300']}`,
    transform: 'scale(1.2)',
    outline: 'none'
  }
})

const calendarTimerLabel = style({
  ':hover': {
    cursor: 'pointer'
  }
})

export const calendarTimerClasses = {
  calendarTimerContentStyle,
  calendarTimerHourStyle,
  calendarTimerContainerStyle,
  calendarTimerLabel
}
