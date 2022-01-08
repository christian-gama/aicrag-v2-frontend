import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'

export const calendarBody = style({
  display: 'grid',
  gridAutoRows: '50px',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: '28px',
  height: '100%',
  width: '100%',
  padding: '1.2rem 3.2rem',

  '@media': {
    [breakpoints.mobile]: {
      padding: '0.8rem 1.2rem',
      gridAutoRows: '44px'
    }
  }
})
