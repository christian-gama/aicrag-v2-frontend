import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const navHeader = style({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'max-content 1fr',
  alignItems: 'center',
  justifyItems: 'center',
  padding: '0 4rem',
  height: '14rem',

  '@media': {
    [breakpoints.mobile]: {
      padding: '0 1.2rem',
      height: '12rem',
      gap: '1.6rem'
    }
  }
})
