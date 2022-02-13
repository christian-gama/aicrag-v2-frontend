import { createGlobalTheme, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { breakpoints, vars } from '@/components/_settings'

export const filterVars = createGlobalTheme(':root', {
  height: {
    mobile: '100%',
    tablet: '100%',
    widescreen: '100%'
  }
})

export const filter = recipe({
  base: {
    display: 'grid',
    gridTemplateRows: '4rem auto',
    alignItems: 'center',
    transition: 'height 0.2s ease-in-out, padding 0.2s ease-in-out',
    margin: '0 auto',
    borderRadius: '0.5rem',
    boxShadow: vars.shadow.xsm,
    backgroundColor: vars.colors.white,
    padding: '0 2rem 2rem 2rem',
    width: '100vw',
    maxWidth: '91.2rem',
    minHeight: '4rem',
    overflow: 'hidden',
    gap: '2.4rem'
  },

  variants: {
    isOpen: {
      true: {
        height: filterVars.height.widescreen,

        '@media': {
          [breakpoints.tablet]: {
            height: filterVars.height.tablet
          },

          [breakpoints.mobile]: {
            height: filterVars.height.mobile
          }
        }
      },

      false: {
        height: '4rem',

        ':hover': {
          cursor: 'pointer'
        }
      }
    }
  },

  defaultVariants: {
    isOpen: false
  }
})

export const filterHeading = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  fontWeight: 'bold',

  ':hover': {
    cursor: 'pointer'
  }
})

export const filterHeadingIcon = style({
  position: 'absolute',
  top: '60%',
  right: '0rem',
  transform: 'translateY(-50%)'
})

export const filterBody = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '1.6rem',

  '@media': {
    [breakpoints.tablet]: {
      gridTemplateColumns: '1fr'
    }
  }
})
