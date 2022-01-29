import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const right = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50vw',
  height: '100vh',

  '@media': {
    [breakpoints.desktop]: {
      justifyContent: 'flex-start',
      marginTop: '4.8rem',
      width: '100vw',
      height: '70vh'
    },

    [breakpoints.mobile]: {
      height: '80vh',
      marginTop: '2.8rem'
    }
  }
})

export const textArea = style({
  display: 'flex',
  flexDirection: 'column',
  width: '65rem',
  textAlign: 'center',
  gap: '2rem',

  '@media': {
    [breakpoints.widescreen]: {
      width: '40rem'
    },

    [breakpoints.desktop]: {
      width: '100%',
      padding: '4.2rem'
    },

    [breakpoints.mobile]: {
      padding: '0 1.6rem'
    }
  }
})

export const buttonArea = style({
  marginTop: '7.8rem',

  [breakpoints.mobile]: {
    marginTop: '1.6rem'
  }
})
