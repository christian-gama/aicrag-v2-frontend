import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { type } from './variants/progressBarWrapper'

export const progressBarWrapperRecipe = recipe({
  base: {
    height: '0.4rem',
    width: '100%',
    filter: 'grayscale(40%)'
  },

  variants: {
    type
  }
})

export type ProgressBarWrapperVariants = NonNullable<RecipeVariants<typeof progressBarWrapperRecipe>>
