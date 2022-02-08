import { style } from '@vanilla-extract/css'
import { vars, breakpoints } from '@/components/_settings'

export const calendarFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '0 0 5px 5px',
  backgroundColor: vars.colors['gray-50'],
  padding: '2.8rem 2rem',
  width: '100%',

  '@media': {
    [breakpoints.mobile]: {
      flexDirection: 'column'
    }
  }
})
