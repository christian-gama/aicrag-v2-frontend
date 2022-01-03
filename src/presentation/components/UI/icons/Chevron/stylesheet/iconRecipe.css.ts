import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { size } from '../../common/variants/size.css'
import { color } from './variants/color.css'
import { direction } from './variants/direction.css'

export const iconRecipe = recipe({
  base: {
    transition: 'fill 0.1s ease-in-out, background-color 0.1s ease-in-out'
  },

  variants: {
    size,
    color,
    direction
  },

  defaultVariants: {
    size: 'md',
    color: 'main',
    direction: 'right'
  }
})

export type ChevronIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
