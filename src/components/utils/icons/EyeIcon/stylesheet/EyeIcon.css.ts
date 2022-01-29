import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings'
import { sizeVariants } from '../..'

export const eyeIconRecipe = recipe({
  base: {
    ':hover': {
      cursor: 'pointer'
    }
  },

  variants: {
    color: fillColorVariants,
    size: sizeVariants
  },

  defaultVariants: {
    color: 'primary',
    size: 'md'
  }
})

export type EyeIconVariants = NonNullable<RecipeVariants<typeof eyeIconRecipe>>
