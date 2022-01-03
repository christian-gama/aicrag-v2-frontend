import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { color } from '@/application/common/stylesheet/colorVariants.css'
import { size } from '../../common/size.css'

export const iconRecipe = recipe({
  variants: {
    color,
    size
  },

  defaultVariants: {
    size: 'md'
  }
})

export type ErrorIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
