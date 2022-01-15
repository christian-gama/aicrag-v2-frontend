import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/variants.css'
import { sizeVariants } from '../../common/variants/size.css'

export const checkCircleIconRecipe = recipe({
  variants: {
    color: fillColorVariants,
    size: sizeVariants
  },

  defaultVariants: {
    size: 'md'
  }
})

export type CheckCircleIconVariants = NonNullable<RecipeVariants<typeof checkCircleIconRecipe>>
