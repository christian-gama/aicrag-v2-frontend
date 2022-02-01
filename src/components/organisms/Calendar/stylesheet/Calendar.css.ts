import { style } from '@vanilla-extract/css'
import { vars, breakpoints } from '@/components/_settings'

export const calendar = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '5px',
  backgroundColor: vars.colors.white,
  width: '52rem',

  '@media': {
    [breakpoints.mobile]: {
      width: '100vw'
    }
  }
})
