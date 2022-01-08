import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'

export const popoverTextWrapper = style({
  alignItems: 'center',
  display: 'flex',
  gap: '2.4rem',
  marginRight: '1.6rem',
  maxWidth: '80%',
  minHeight: '7.6rem',
  paddingBottom: '1.6rem',
  paddingTop: '1.6rem',
  width: '100%',

  '@media': {
    [breakpoints.mobile]: {
      maxWidth: '92%',
      gap: '1.6rem'
    }
  }
})
