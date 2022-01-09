import { createGlobalTheme } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'
import { transparent, roundness, centered } from '../variants'

export const cardVars = createGlobalTheme(':root', {
  height: 'max-content',
  margin: '0',
  padding: '0',
  width: 'max-content'
})

export const cardRecipe = recipe({
  base: {
    boxShadow: vars.shadow.sm,
    height: cardVars.height,
    margin: cardVars.margin,
    maxWidth: cardVars.width,
    minWidth: cardVars.width,
    padding: cardVars.padding,
    width: cardVars.width
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
