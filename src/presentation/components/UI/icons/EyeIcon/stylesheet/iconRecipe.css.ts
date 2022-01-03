import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { color } from '@/application/common/stylesheet/colorVariants.css'
import { size } from '../../common/size.css'

export const iconRecipe = recipe({
  base: {
    ':hover': {
      cursor: 'pointer'
    }
  },

  variants: {
    color,
    size
  },

  defaultVariants: {
    size: 'md',
    color: 'secondary'
  }
})

export type EyeIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
