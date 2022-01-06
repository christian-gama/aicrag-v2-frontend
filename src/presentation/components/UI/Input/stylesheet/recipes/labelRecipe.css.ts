import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'
import { float, state } from '../variants/label'

export const labelRecipe = recipe({
  base: {
    backgroundColor: vars.colors.white,
    left: '1rem',
    lineHeight: '1',
    fontFamily: vars.font.p.fontFamily,
    position: 'absolute',
    transform: 'translateY(-50%)',
    transition: 'top 0.2s ease 0s, font-weight 0s linear 0.1s, padding 0.2s ease-in-out, font-size 0.2s ease',
    zIndex: 1,

    ':hover': {
      cursor: 'text'
    }
  },

  variants: {
    state,
    float
  }
})

export type LabelRecipeVariants = NonNullable<RecipeVariants<typeof labelRecipe>>
