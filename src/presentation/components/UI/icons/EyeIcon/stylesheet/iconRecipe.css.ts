import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColor } from '@/application/common/stylesheet/variants/fillColor.css'
import { size } from '../../common/variants/size.css'

export const iconRecipe = recipe({
  base: {
    ':hover': {
      cursor: 'pointer'
    }
  },

  variants: {
    color: fillColor,
    size
  },

  defaultVariants: {
    size: 'md',
    color: 'secondary'
  }
})

export type EyeIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
