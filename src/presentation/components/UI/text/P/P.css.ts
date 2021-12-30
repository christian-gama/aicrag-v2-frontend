import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/presentation/styles/vars.css'
import { color } from '../../../../styles/colorVariants.css'
import { baseStyle } from '../commonStyle/base.css'

const pRecipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.p.fontFamily,
      fontSize: vars.font.p.fontSize
    }
  ],

  variants: { color }
})

export const pClasses = {
  pRecipe
}

export type PRecipeVariants = NonNullable<RecipeVariants<typeof pRecipe>>
