import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'

export const calendarBody = style({
  display: 'grid',
  gridTemplateRows: '28px',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridAutoRows: '50px',
  padding: '1.2rem 3.2rem',
  width: '100%',
  height: '100%',

  '@media': {
    [breakpoints.mobile]: {
      gridAutoRows: '44px',
      padding: '0.8rem 1.2rem'
    }
  }
})
