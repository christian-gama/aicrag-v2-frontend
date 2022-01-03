import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColor } from '@/application/common/stylesheet/variants/fillColor.css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { baseStyle } from '../../commonStyle/base.css'

export const pRecipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.p.fontFamily,
      fontSize: vars.font.p.fontSize
    }
  ],

  variants: { color: fillColor }
})

export type PRecipeVariants = NonNullable<RecipeVariants<typeof pRecipe>>
