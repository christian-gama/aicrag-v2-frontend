import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColor } from '@/application/common/stylesheet/variants/fillColor.css'
import { size } from '../../../common/variants/size.css'

export const iconRecipe = recipe({
  variants: {
    color: fillColor,
    size
  },

  defaultVariants: {
    size: 'md'
  }
})

export type ErrorIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
