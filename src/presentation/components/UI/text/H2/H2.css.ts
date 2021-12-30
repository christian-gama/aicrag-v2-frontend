import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/presentation/styles/vars.css'
import { color } from '../../../../styles/colorVariants.css'
import { baseStyle } from '../commonStyle/base.css'

const h2Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h2.fontFamily,
      fontSize: vars.font.h2.fontSize
    }
  ],

  variants: { color }
})

export const h2Classes = {
  h2Recipe
}

export type H2RecipeVariants = NonNullable<RecipeVariants<typeof h2Recipe>>
