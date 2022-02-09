import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const calendarTimer = style({
  display: 'flex',
  alignItems: 'center',

  '@media': {
    [breakpoints.mobile]: {
      display: 'none'
    }
  }
})

export const calendarTimerContent = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '1rem',
  borderRadius: '5px',
  width: '13rem',
  height: '3.2rem'
})

export const calendarTimerLabel = style({
  ':hover': {
    cursor: 'pointer'
  }
})
