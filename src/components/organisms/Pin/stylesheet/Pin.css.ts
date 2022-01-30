import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const pin = style({
  width: '60rem',
  height: '65rem'
})

export const pinHeader = style({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: 'max-content 1fr',
  height: '14rem',
  justifyItems: 'center',
  padding: '0 4rem',

  '@media': {
    [breakpoints.mobile]: {
      height: '12rem',
      padding: '0 1.2rem',
      gap: '1.6rem'
    }
  }
})
