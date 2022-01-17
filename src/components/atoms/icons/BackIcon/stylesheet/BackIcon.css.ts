import { styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

const colorVariants = styleVariants({
  white: {
    fill: vars.colors.white
  },

  primary: {
    fill: vars.colors['navy-500']
  }
})

const sizeVariants = styleVariants({
  sm: {
    width: '4.8rem',

    '@media': {
      [breakpoints.mobile]: {
        width: '3.6rem'
      }
    }
  },

  md: {
    width: '6.4rem',

    '@media': {
      [breakpoints.mobile]: {
        width: '3.6rem'
      }
    }
  }
})

export const backIconRecipe = recipe({
  base: {
    display: 'inline-block'
  },

  variants: {
    size: sizeVariants,
    color: colorVariants
  },

  defaultVariants: {
    size: 'sm',
    color: 'primary'
  }
})

export type BackIconVariants = NonNullable<RecipeVariants<typeof backIconRecipe>>
