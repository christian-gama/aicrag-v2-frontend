import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings/vars.css'

export const menuButtonRecipe = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
    fontSize: vars.font.button.fontSize,
    fontFamily: vars.font.button.fontFamily,
    border: 'none',
    transition: 'background-color 0.1s ease-in-out, color 0.1s ease-in-out',
    borderBottom: `1px solid ${vars.colors['navy-500']}`,
    textDecoration: 'none',

    ':hover': {
      cursor: 'pointer'
    }
  },

  variants: {
    active: {
      true: {
        backgroundColor: vars.colors['navy-500'],
        color: vars.colors.white
      },

      false: {
        backgroundColor: vars.colors.white,
        color: vars.colors['navy-500'],

        ':hover': {
          backgroundColor: vars.colors['navy-50']
        }
      }
    }
  }
})
