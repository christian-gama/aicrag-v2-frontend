import { style } from '@vanilla-extract/css'

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

const calendarTimerLabel = style({
  ':hover': {
    cursor: 'pointer'
  }
})

export const calendarTimerClasses = {
  calendarTimerContentStyle,
  calendarTimerContainerStyle,
  calendarTimerLabel
}
