import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/variants.css'
import { sizeVariants } from '../../common/variants/size.css'

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
    size: 'md',
    color: 'primary'
  }
})

export type EyeIconVariants = NonNullable<RecipeVariants<typeof eyeIconRecipe>>
