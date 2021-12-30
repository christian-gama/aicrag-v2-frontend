import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/presentation/styles/vars.css'
import { color } from '../../../../styles/colorVariants.css'
import { baseStyle } from '../commonStyle/base.css'

const h3Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h3.fontFamily,
      fontSize: vars.font.h3.fontSize
    }
  ],

  variants: { color }
})

export const h3Classes = {
  h3Recipe
}

export type H3RecipeVariants = NonNullable<RecipeVariants<typeof h3Recipe>>
