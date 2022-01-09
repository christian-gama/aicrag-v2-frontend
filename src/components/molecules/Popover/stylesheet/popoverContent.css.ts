import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'

export const popoverContent = style({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  paddingLeft: '2.4rem',
  position: 'relative',
  width: '100%',

  '@media': {
    [breakpoints.mobile]: {
      paddingLeft: '1.2rem'
    }
  }
})
