import { style } from '@vanilla-extract/css'
import { breakpoints, windowHeightVars } from '@/components/_settings'

export const pin = style({
  width: '60rem',
  height: '65rem',
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [breakpoints.widescreen]: {
      height: '57.6rem'
    },

    [breakpoints.tablet]: {
      width: '50rem'
    },

    [breakpoints.mobile]: {
      width: '100vw',
      height: windowHeightVars.height
    }
  }
})

export const pinContentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: '1',
  gap: '6.8rem',

  '@media': {
    [breakpoints.widescreen]: {
      width: '54rem',
      gap: '1.2rem'
    },

    [breakpoints.tablet]: {
      width: '50rem'
    },

    [breakpoints.mobile]: {
      gap: '6.8rem'
    }
  }
})

export const pinContentMain = style({
  display: 'flex',

  '@media': {
    [breakpoints.mobile]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
})

export const pinContentSteps = style({
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  padding: '0 4rem',

  '@media': {
    [breakpoints.mobile]: {
      justifyContent: 'center',
      padding: '2.8rem 1.2rem 2.8rem 1.2rem',
      width: '100%'
    }
  }
})

export const pinContentText = style({
  display: 'flex',
  flex: '2',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5.8rem 4rem',

  '@media': {
    [breakpoints.mobile]: {
      textAlign: 'center',
      margin: '0 1.2rem',
      padding: '3.8rem 0',
      maxWidth: '40rem'
    }
  }
})
