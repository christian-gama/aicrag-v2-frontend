import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const calendarTimer = style({
  display: 'flex',
  alignItems: 'center',

  '@media': {
    [vars.breakpoints.mobile]: {
      marginBottom: '3.2rem'
    }
  }
})

export const calendarTimerContent = style({
  alignItems: 'center',
  borderRadius: '5px',
  display: 'flex',
  height: '3.2rem',
  marginLeft: '1rem',
  width: '13rem'
})

export const calendarTimerLabel = style({
  ':hover': {
    cursor: 'pointer'
  }
})
