import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/variants.css'
import { size } from '../../../common/variants/size.css'

export const iconRecipe = recipe({
  base: {
    ':hover': {
      cursor: 'pointer'
    }
  },

  variants: {
    color: fillColorVariants,
    size
  },

  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
})

export type EyeIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
