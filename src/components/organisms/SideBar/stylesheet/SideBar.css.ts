import { style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'

export const sideBarTop = style({
  width: '100%'
})

export const sideBar = style({
  display: 'flex',
  position: 'fixed',
  flexDirection: 'column',
  gridArea: 'sidebar',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: vars.shadow.sm,
  backgroundColor: vars.colors.white,
  height: '100vh',
  width: '29rem',

  '@media': {
    [breakpoints.widescreen]: {
      width: '27rem'
    },

    [breakpoints.desktop]: {
      position: 'fixed',
      bottom: 0,
      width: '100vw',
      height: '5.6rem',
      zIndex: 10
    }
  }
})

export const sideBarLogoWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `1px solid ${vars.colors['navy-500']}`,
  width: '100%',
  height: '18rem',

  '@media': {
    [breakpoints.desktop]: {
      display: 'none'
    }
  }
})

export const sideBarLogo = style({
  transition: 'filter 0.2s ease-in-out',

  ':hover': {
    cursor: 'pointer',
    filter: 'brightness(1.5)'
  }
})

export const sideBarButtonGroup = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',

  '@media': {
    [breakpoints.desktop]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
})

export const sideBarFooter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '2rem',
  padding: '0 0.2rem',
  width: '100%',
  textAlign: 'center',

  '@media': {
    [breakpoints.desktop]: {
      display: 'none'
    }
  }
})
