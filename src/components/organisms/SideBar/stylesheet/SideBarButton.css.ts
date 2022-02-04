import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { breakpoints, vars } from '@/components/_settings'

export const sideBarButtonLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
})

export const sideBarButtonChevron = style({
  '@media': {
    [breakpoints.desktop]: {
      display: 'none'
    }
  }
})

export const sideBarButtonNavLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize,
  textTransform: 'uppercase',

  '@media': {
    [breakpoints.desktop]: {
      display: 'none'
    }
  }
})

export const sideBarButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'background-color 0.2s ease-in-out',
  padding: '0 2rem',
  width: '100%',
  height: '6rem',
  textDecoration: 'none',
  color: vars.colors['navy-500'],

  ':hover': {
    backgroundColor: vars.colors['gray-50'],
    cursor: 'pointer'
  },

  '@media': {
    [breakpoints.desktop]: {
      justifyContent: 'center'
    }
  }
})

export const sideBarButtonRecipe = recipe({
  base: [sideBarButton],

  variants: {
    isActive: {
      true: {
        backgroundColor: vars.colors['gray-100']
      },

      false: {
        backgroundColor: vars.colors.white
      }
    }
  }
})
