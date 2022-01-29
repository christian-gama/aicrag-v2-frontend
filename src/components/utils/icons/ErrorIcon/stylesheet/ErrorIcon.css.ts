import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings'
import { sizeVariants } from '../..'

export const errorIconRecipe = recipe({
  variants: {
    color: fillColorVariants,
    size: sizeVariants
  },

  defaultVariants: {
    color: 'primary',
    size: 'md'
  }
})

export type ErrorIconVariants = NonNullable<
RecipeVariants<typeof errorIconRecipe>
>
