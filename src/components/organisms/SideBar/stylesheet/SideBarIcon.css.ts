import { createGlobalTheme, style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'
import { sideBarButton } from '@/components/organisms/SideBar/stylesheet'

export const sideBarIconWidthVars = createGlobalTheme(':root', {
  width: '1.6rem'
})

export const sideBarIcon = style({
  transition: 'filter 0.2s ease-in-out',
  width: sideBarIconWidthVars.width,
  fill: vars.colors['navy-500'],

  selectors: {
    [`${sideBarButton}:hover &, ${sideBarButton}[data-active="true"] &`]: {
      fill: vars.colors.white
    }
  }
})

export const sideBarIconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease-in-out',
  borderRadius: '50%',
  backgroundColor: vars.colors['snow-900'],
  width: '3.6rem',
  height: '3.6rem',

  selectors: {
    [`${sideBarButton}:hover &, ${sideBarButton}[data-active="true"] &`]: {
      backgroundColor: vars.colors['navy-500']
    }
  },

  '@media': {
    [breakpoints.desktop]: {
      width: '4.2rem',
      height: '4.2rem'
    }
  }
})
