import { style } from '@vanilla-extract/css'

const wrapperStyle = style({
  display: 'flex',
  alignItems: 'center'
})

const contentStyle = style({
  display: 'flex',
  alignItems: 'center',
  width: '13rem',
  height: '3.2rem',
  marginLeft: '1rem',
  borderRadius: '5px'
})

const timerLabel = style({
  ':hover': {
    cursor: 'pointer'
  }
})

export const calendarTimerClasses = {
  contentStyle,
  timerLabel,
  wrapperStyle
}
