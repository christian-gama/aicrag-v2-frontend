import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { color } from '@/application/common/stylesheet/colorVariants.css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { baseStyle } from '../../commonStyle/base.css'

const h1Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h1.fontFamily,
      fontSize: vars.font.h1.fontSize
    }
  ],

  variants: { color }
})

export const h1Classes = {
  h1Recipe
}

export type H1RecipeVariants = NonNullable<RecipeVariants<typeof h1Recipe>>
