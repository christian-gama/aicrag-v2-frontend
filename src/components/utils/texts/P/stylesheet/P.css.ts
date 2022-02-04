import { createGlobalTheme } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, fillColorVariants } from '@/components/_settings'
import { baseStyle } from '../../common'

export const pVars = createGlobalTheme(':root', {
  margin: '0'
})

export const pRecipe = recipe({
  base: [
    baseStyle,
    {
      margin: pVars.margin,
      fontFamily: vars.font.p.fontFamily,
      fontSize: vars.font.p.fontSize
    }
  ],

  variants: { color: fillColorVariants },

  defaultVariants: {
    color: 'text'
  }
})

export type PRecipeVariants = NonNullable<RecipeVariants<typeof pRecipe>>
