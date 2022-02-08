import { style } from '@vanilla-extract/css'
import { vars, breakpoints } from '@/components/_settings'

export const calendarHeaderChevron = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
  width: '4rem',
  height: '4rem',
  transition: 'background-color 0.2s ease-in-out',

  ':hover': {
    backgroundColor: vars.colors['navy-400']
  }
})

export const calendarHeaderChevronLeft = style({
  padding: '0.2rem 0.2rem 0 0'
})

export const calendarHeaderChevronRight = style({
  padding: '0.2rem 0 0 0.2rem'
})

export const calendarHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '5px 5px 0 0',
  backgroundColor: vars.colors['navy-600'],
  padding: '1.8rem',
  width: '100%',
  height: '7.2rem',

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
