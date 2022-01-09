import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/variants.css'
import { size } from '../../common/variants/size.css'

export const infoCircleIconRecipe = recipe({
  variants: {
    color: fillColorVariants,
    size
  },

  defaultVariants: {
    size: 'md'
  }
})

export type InfoCircleIconRecipeVariants = NonNullable<RecipeVariants<typeof infoCircleIconRecipe>>
