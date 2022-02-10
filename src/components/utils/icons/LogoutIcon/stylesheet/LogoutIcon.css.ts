import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings'

export const logoutIconWrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
    paddingLeft: '4px',
    width: '3.6rem',
    height: '3.6rem'
  },

  variants: {
    color: {
      primary: {
        backgroundColor: 'white'
      },

      secondary: {
        backgroundColor: vars.colors['cyan-900']
      }
    }
  }
})

export const logoutIconRecipe = recipe({
  base: {
    width: '2rem'
  },

  variants: {
    color: {
      primary: {
        color: vars.colors['cyan-900'],
        fill: vars.colors['cyan-900'],

        ':hover': {
          filter: 'brightness(130%)'
        }
      },

      secondary: {
        color: vars.colors.white,
        fill: vars.colors.white,

        ':hover': {
          filter: 'brightness(90%)'
        }
      }
    }
  },

  defaultVariants: {
    color: 'primary'
  }
})

export type LogoutIconVariants = NonNullable<
RecipeVariants<typeof logoutIconRecipe>
>
