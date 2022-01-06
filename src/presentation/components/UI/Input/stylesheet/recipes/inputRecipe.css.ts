import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'
import { state, hasIcon } from '../variants/input'

export const inputRecipe = recipe({
  base: {
    backgroundColor: vars.colors.white,
    border: 'none',
    borderRadius: '5px',
    color: vars.colors.text.default,
    fontFamily: vars.font.p.fontFamily,
    fontSize: vars.font.p.fontSize,
    height: '4.8rem',
    maxWidth: '100%',
    minWidth: '100%',
    padding: '1rem',
    width: '100%',

    selectors: {
      '&:focus': {
        outline: 'none'
      }
    }
  },

  variants: {
    state,
    hasIcon
  }
})

export type InputRecipeVariants = NonNullable<RecipeVariants<typeof inputRecipe>>
