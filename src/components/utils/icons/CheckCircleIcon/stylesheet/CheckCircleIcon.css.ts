import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings'
import { sizeVariants } from '../..'

export const checkCircleIconRecipe = recipe({
  variants: {
    color: fillColorVariants,
    size: sizeVariants
  },

  defaultVariants: {
    color: 'primary',
    size: 'md'
  }
})

export type CheckCircleIconVariants = NonNullable<
RecipeVariants<typeof checkCircleIconRecipe>
>
