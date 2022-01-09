import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/application/common/breakpoints.css'
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
      },

      '&:autofill': {
        background: vars.colors.white
      }
    },

    '@media': {
      [breakpoints.mobile]: {
        height: '4.4rem'
      }
    }
  },

  variants: {
    state,
    hasIcon
  }
})

export type InputRecipeVariants = NonNullable<RecipeVariants<typeof inputRecipe>>
