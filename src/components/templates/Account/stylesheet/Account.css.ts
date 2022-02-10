import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const accountButton = style({
  marginTop: '7rem',
  display: 'flex',
  justifyContent: 'center'
})

export const accountForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem'
})

export const accountWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
})

export const account = style({
  display: 'flex',
  width: '50rem',
  flexDirection: 'column',
  gap: '4rem'
})

export const accountMenu = style({
  width: '100%',

  '@media': {
    [breakpoints.mobile]: {
      width: '100vw',
      marginLeft: '-1.6rem',
      marginRight: '-1.6rem'
    }
  }
})
