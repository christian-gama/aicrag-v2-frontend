import { style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: vars.colors['navy-500'],
  height: '12rem'
})

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '9rem',

  '@media': {
    [breakpoints.desktop]: {
      marginLeft: '7rem'
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
  ':hover': {
    cursor: 'pointer'
  }
})

export const headerPageName = style({
  marginLeft: '4.4rem',

  '@media': {
    [breakpoints.desktop]: {
      marginLeft: '4rem'
    },

    [breakpoints.tablet]: {
      marginLeft: '2.4rem'
    },

    [breakpoints.mobile]: {
      marginLeft: '2rem'
    }
  }
})

export const headerRight = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginRight: '9rem',

  '@media': {
    [breakpoints.desktop]: {
      marginRight: '7rem'
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
  marginRight: '4.4rem',

  '@media': {
    [breakpoints.desktop]: {
      marginLeft: '3.6rem'
    }
  }
})

export const headerIconGroup = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '16rem',

  '@media': {
    [breakpoints.desktop]: {
      width: '15rem'
    }
  }
})
