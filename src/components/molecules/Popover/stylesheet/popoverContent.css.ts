import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const popoverContent = style({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  paddingLeft: '2.4rem',
  position: 'relative',
  width: '100%',

  '@media': {
    [vars.breakpoints.mobile]: {
      paddingLeft: '1.2rem'
    }
  }
})
