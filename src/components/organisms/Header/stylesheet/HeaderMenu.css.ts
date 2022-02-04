import { style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'

export const headerMenu = style({
  display: 'flex',
  position: 'fixed',
  top: '12.5rem',
  left: '0',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: vars.shadow.sm,
  backgroundColor: vars.colors.white,
  width: '100vw',

  '@media': {
    [breakpoints.mobile]: {
      top: '14.5rem'
    }
  }
})
export const headerMenuItemSettings = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.6rem'
})

export const headerMenuItem = style({
  display: 'flex',
  alignItems: 'center',
  transition: 'background-color 0.1s ease-in-out',
  padding: '1.6rem 2rem',
  minHeight: '7.2rem',
  gap: '2rem',

  selectors: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${vars.colors['gray-100']}`
    },

    '&:not(:first-child):active': {
      backgroundColor: vars.colors['gray-100']
    }
  }
})
