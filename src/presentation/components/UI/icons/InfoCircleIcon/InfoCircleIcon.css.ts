import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { color } from '@/application/common/stylesheet/colorVariants.css'

const iconRecipe = recipe({
  variants: {
    color,
    size: {
      sm: {
        width: '1.6rem',
        height: '1.6rem'
      },
      md: {
        width: '2rem',
        height: '2rem'
      },
      lg: {
        width: '2.4rem',
        height: '2.4rem'
      }
    }
  },

  defaultVariants: {
    size: 'md'
  }
})

export const infoCircleClasses = {
  iconRecipe
}

export type InfoCircleIconRecipeVariants = NonNullable<RecipeVariants<typeof iconRecipe>>