import { styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings'

const typeVariants = styleVariants({
  default: {
    color: vars.colors['cyan-900'],

    ':hover': {
      color: vars.colors['cyan-600']
    },

    ':focus': {
      color: vars.colors['cyan-600']
    },

    ':active': {
      color: vars.colors['cyan-600']
    }
  },

  button: {
    textDecoration: 'none',
    color: vars.colors.white,

    ':hover': {
      color: vars.colors.white
    },

    ':focus': {
      color: vars.colors.white
    },

    ':active': {
      color: vars.colors.white
    }
  }
})

export const link = recipe({
  base: {
    transition: 'color 0.2s ease-in-out',
    fontFamily: vars.font.hint.fontFamily,
    fontSize: vars.font.hint.fontSize
  },

  variants: {
    type: typeVariants
  },

  defaultVariants: {
    type: 'default'
  }
})

export type LinkVariants = NonNullable<RecipeVariants<typeof link>>
