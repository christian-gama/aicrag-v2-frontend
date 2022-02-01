import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings'

export const menu = style({
  display: 'flex',
  backgroundColor: vars.colors.white,
  width: '100%',
  height: '4.8rem'
})

export const menuButtonRecipe = recipe({
  base: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.1s ease-in-out, color 0.1s ease-in-out',
    border: 'none',
    borderBottom: `1px solid ${vars.colors['navy-500']}`,
    textDecoration: 'none',
    fontFamily: vars.font.button.fontFamily,
    fontSize: vars.font.button.fontSize,

    ':hover': {
      cursor: 'pointer'
    }
  },

  variants: {
    active: {
      true: {
        backgroundColor: vars.colors['navy-500'],
        color: vars.colors.white,

        ':active': {
          color: vars.colors.white
        },

        ':visited': {
          color: vars.colors.white
        }
      },

      false: {
        backgroundColor: vars.colors.white,
        color: vars.colors['navy-500'],

        ':hover': {
          backgroundColor: vars.colors['navy-50']
        },

        ':active': {
          color: vars.colors['navy-500']
        },

        ':visited': {
          color: vars.colors['navy-500']
        }
      }
    }
  }
})

export type MenuButtonVariants = NonNullable<
RecipeVariants<typeof menuButtonRecipe>
>
