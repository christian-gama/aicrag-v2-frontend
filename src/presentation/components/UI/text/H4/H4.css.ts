import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { color } from '@/application/common/stylesheet/colorVariants.css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { baseStyle } from '../commonStyle/base.css'

const h4Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h4.fontFamily,
      fontSize: vars.font.h4.fontSize
    }
  ],

  variants: { color }
})

export const h4Classes = {
  h4Recipe
}

export type H4RecipeVariants = NonNullable<RecipeVariants<typeof h4Recipe>>
