import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { breakpoints, vars } from '@/components/_settings'

export const pinCodeWrapper = style({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%'
})

export const pinCode = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '4.8rem'
})

export const pinInput = recipe({
  base: {
    width: '6rem',
    height: '9rem',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: '3.2rem',
    fontWeight: '300',

    ':focus': {
      outline: 'none'
    },

    '@media': {
      [breakpoints.mobile]: {
        width: '5.4rem',
        height: '8rem'
      }
    },

    selectors: {
      '&:not(:last-child)': {
        marginRight: '2.5rem',

        '@media': {
          [breakpoints.mobile]: {
            marginRight: '0.8rem'
          }
        }
      }
    }
  },

  variants: {
    state: {
      default: {
        color: vars.colors.black,
        border: `1px solid ${vars.colors.black}`,

        ':focus': {
          border: `2px solid ${vars.colors.black}`
        }
      },

      error: {
        color: vars.colors['danger-400'],
        border: `1px solid ${vars.colors['danger-400']}`,

        ':focus': {
          border: `2px solid ${vars.colors['danger-400']}`
        }
      }
    }
  },

  defaultVariants: {
    state: 'default'
  }
})
