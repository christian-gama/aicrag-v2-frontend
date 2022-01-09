import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

export const calendarHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '6rem',
  padding: '1.8rem',
  backgroundColor: vars.colors['navy-600'],
  borderRadius: '5px 5px 0 0',

  '@media': {
    [breakpoints.mobile]: {
      borderRadius: '0',
      padding: '1.2rem'
    }
  }
})

export const calendarHeaderDate = style({
  color: vars.colors.white,
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize
})
