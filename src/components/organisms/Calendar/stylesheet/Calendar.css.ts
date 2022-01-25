import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

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
