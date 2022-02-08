import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings'

export const pagination = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '0.5rem',
  background: vars.colors['cyan-700'],
  width: 'min-content',
  height: '3.2rem',
  overflow: 'hidden'
})

export const paginationAction = recipe({
  base: {
    paddingTop: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease-in-out',
    width: '3.2rem',
    height: '100%'
  },

  variants: {
    disabled: {
      true: {
        backgroundColor: vars.colors['gray-600'],

        ':hover': {
          cursor: 'not-allowed'
        }
      },

      false: {
        backgroundColor: vars.colors['cyan-700'],

        ':hover': {
          backgroundColor: vars.colors['cyan-900'],
          cursor: 'pointer'
        }
      }
    }
  }
})

export const paginationPage = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: vars.colors['gray-100'],
  width: '4.4rem',
  height: '100%',
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize
})
