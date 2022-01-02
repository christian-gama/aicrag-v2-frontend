import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { color } from '@/application/common/stylesheet/colorVariants.css'

const iconRecipe = recipe({
  variants: {
    color,
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

export const errorIconClasses = {
  iconRecipe
}

export type ErrorIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
