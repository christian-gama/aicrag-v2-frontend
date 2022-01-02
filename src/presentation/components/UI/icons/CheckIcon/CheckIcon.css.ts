import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

const iconRecipe = recipe({
  base: {
    fill: vars.colors.transparent
  },

  variants: {
    color: {
      white: {
        fill: vars.colors.white
      },
      dark: {
        fill: vars.colors['gray-900']
      }
    },
    size: {
      sm: {
        width: '1.6rem',
        height: '1.6rem',
        minWidth: '1.6rem',
        minHeight: '1.6rem'
      },
      md: {
        width: '2rem',
        height: '2rem',
        minWidth: '2rem',
        minHeight: '2rem'
      },
      lg: {
        width: '2.4rem',
        height: '2.4rem',
        minWidth: '2.4rem',
        minHeight: '2.4rem'
      }
    }
  },

  defaultVariants: {
    size: 'md'
  }
})

export const checkIconClasses = {
  iconRecipe
}

export type CheckIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
