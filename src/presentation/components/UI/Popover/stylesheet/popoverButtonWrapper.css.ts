import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const popoverButtonWrapper = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '8rem',
  height: '5.2rem',
  borderLeft: `1px solid ${vars.colors.white}`,

  '@media': {
    [breakpoints.mobile]: {
      width: '7.2rem'
    }
  }
})
