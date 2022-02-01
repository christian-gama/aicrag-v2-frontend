import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { breakpoints, vars } from '@/components/_settings'

export const pinCodeWrapper = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const pinCode = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '4.8rem'
})

export const pinInput = recipe({
  base: {
    textAlign: 'center',
    width: '6rem',
    height: '9rem',
    fontSize: '3.2rem',
    fontFamily: 'Lato',
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
        border: `1px solid ${vars.colors.black}`,

        ':focus': {
          border: `2px solid ${vars.colors.black}`
        }
      },

      error: {
        border: `1px solid ${vars.colors['danger-500']}`,

        ':focus': {
          border: `2px solid ${vars.colors['danger-500']}`
        }
      }
    }
  },

  defaultVariants: {
    state: 'default'
  }
})
