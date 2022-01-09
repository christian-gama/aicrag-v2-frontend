import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'

export const padding = style({
  padding: '2rem 3.5rem',

  '@media': {
    [breakpoints.mobile]: {
      padding: '1.5rem 2rem'
    }
  }
})

export const alert = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '42rem',

  '@media': {
    [breakpoints.mobile]: {
      width: '100vw'
    }
  }
})
