import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'
import { transparent, roundness, centered } from '../variants'

export const cardRecipe = recipe({
  base: {
    boxShadow: vars.shadow.sm,
    height: 'max-content',
    maxWidth: 'max-content',
    minWidth: 'min-content'
  },

  variants: {
    transparent,
    roundness,
    centered
  },

  defaultVariants: {
    roundness: 'md',
    transparent: false
  }
})

export type CardVariants = NonNullable<RecipeVariants<typeof cardRecipe>>
