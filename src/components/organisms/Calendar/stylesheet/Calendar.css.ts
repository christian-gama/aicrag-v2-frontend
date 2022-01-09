import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

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
