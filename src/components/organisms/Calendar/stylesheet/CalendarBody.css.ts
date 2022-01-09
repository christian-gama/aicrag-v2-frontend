import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const calendarBody = style({
  display: 'grid',
  gridAutoRows: '50px',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: '28px',
  height: '100%',
  width: '100%',
  padding: '1.2rem 3.2rem',

  '@media': {
    [vars.breakpoints.mobile]: {
      padding: '0.8rem 1.2rem',
      gridAutoRows: '44px'
    }
  }
})
