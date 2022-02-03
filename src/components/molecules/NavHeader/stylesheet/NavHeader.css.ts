import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const navHeader = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 4rem',
  width: '100%',
  height: '14rem',

  '@media': {
    [breakpoints.mobile]: {
      padding: '0 1.2rem',
      height: '12rem'
    }
  }
})

export const navHeaderBack = style({
  position: 'absolute',
  left: '4rem',

  '@media': {
    [breakpoints.mobile]: {
      left: '1.2rem'
    }
  }
})

export const navHeaderTitle = style({
  '@media': {
    [breakpoints.mobile]: {
      marginLeft: '4.4rem',
      textAlign: 'center'
    }
  }
})
