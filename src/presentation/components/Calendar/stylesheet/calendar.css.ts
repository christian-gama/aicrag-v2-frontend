import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const calendar = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '52rem',
  backgroundColor: vars.colors.white,
  borderRadius: '5px',

  '@media': {
    [breakpoints.mobile]: {
      width: '100vw'
    }
  }
})
