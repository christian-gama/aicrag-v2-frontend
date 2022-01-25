import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

export const calendarFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '0 0 5px 5px',
  backgroundColor: vars.colors['gray-50'],
  padding: '1.8rem',
  width: '100%',

  '@media': {
    [breakpoints.mobile]: {
      flexDirection: 'column'
    }
  }
})
