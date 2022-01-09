import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

export const calendarFooter = style({
  alignItems: 'center',
  backgroundColor: vars.colors['gray-50'],
  borderRadius: '0 0 5px 5px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.8rem',
  width: '100%',

  '@media': {
    [breakpoints.mobile]: {
      flexDirection: 'column'
    }
  }
})
