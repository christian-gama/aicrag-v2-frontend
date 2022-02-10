import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings'

export const questionIconWrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
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

export const questionIconRecipe = recipe({
  base: {
    width: '1.6rem',
    transition: 'filter 0.15s ease-in-out'
  },

  variants: {
    color: {
      primary: {
        color: vars.colors['cyan-900'],
        fill: vars.colors['cyan-900'],

        selectors: {
          [`${questionIconWrapper()}:hover &`]: {
            filter: 'brightness(140%)'
          }
        }
      },

      secondary: {
        color: vars.colors.white,
        fill: vars.colors.white,

        [`${questionIconWrapper()}:hover &`]: {
          filter: 'brightness(90%)'
        }
      }
    }
  },

  defaultVariants: {
    color: 'primary'
  }
})

export type QuestionIconVariants = NonNullable<
RecipeVariants<typeof questionIconRecipe>
>
