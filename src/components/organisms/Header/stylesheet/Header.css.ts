import { style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'

export const header = style({
  display: 'flex',
  gridArea: 'header',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: vars.colors['navy-500'],
  height: '12rem',

  '@media': {
    [breakpoints.mobile]: {
      height: '14rem'
    }
  }
})

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '9rem',

  '@media': {
    [breakpoints.widescreen]: {
      marginLeft: '6.2rem'
    },

    [breakpoints.desktop]: {
      marginLeft: '3.2rem'
    },

    [breakpoints.tablet]: {
      marginLeft: '2.4rem'
    },

    [breakpoints.mobile]: {
      marginLeft: '2rem'
    }
  }
})

export const headerBackIcon = style({
  marginRight: '4.4rem',

  ':hover': {
    cursor: 'pointer'
  },

  '@media': {
    [breakpoints.desktop]: {
      marginRight: '4rem'
    },

    [breakpoints.desktop]: {
      marginRight: '3.2rem'
    },

    [breakpoints.tablet]: {
      marginRight: '2.4rem'
    },

    [breakpoints.mobile]: {
      marginRight: '0rem'
    }
  }
})
export const headerPageName = style({
  maxWidth: '36rem',

  '@media': {
    [breakpoints.mobile]: {
      maxWidth: '18rem',
      transform: 'scale(0.75)'
    }
  }
})

export const headerRight = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginRight: '9rem',

  '@media': {
    [breakpoints.widescreen]: {
      marginRight: '6.2rem'
    },

    [breakpoints.desktop]: {
      marginRight: '3.2rem'
    },

    [breakpoints.tablet]: {
      marginRight: '2.4rem'
    },

    [breakpoints.mobile]: {
      marginRight: '2rem'
    }
  }
})

export const headerUserName = style({
  marginRight: '2.8rem',

  '@media': {
    [breakpoints.desktop]: {
      marginRight: '1.2rem'
    }
  }
})

export const headerIconGroup = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '12rem',

  '@media': {
    [breakpoints.desktop]: {
      width: '10rem'
    }
  }
})
