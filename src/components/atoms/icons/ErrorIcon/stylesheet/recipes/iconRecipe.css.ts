import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/fillColorVariants.css'
import { size } from '../../../common/variants/size.css'

export const iconRecipe = recipe({
  variants: {
    color: fillColorVariants,
    size
  },

  defaultVariants: {
    size: 'md'
  }
})

export type ErrorIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
