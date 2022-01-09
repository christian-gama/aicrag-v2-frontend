import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const padding = style({
  padding: '2rem 3.5rem',

  '@media': {
    [vars.breakpoints.mobile]: {
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
    [vars.breakpoints.mobile]: {
      width: '100vw'
    }
  }
})
