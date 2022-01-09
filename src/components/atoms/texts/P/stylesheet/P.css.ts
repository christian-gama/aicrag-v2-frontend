import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/variants.css'
import { vars } from '@/components/_settings/vars.css'
import { baseStyle } from '../../common/base.css'

export const pRecipe = recipe({
  base: [
    baseStyle,
    {
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
