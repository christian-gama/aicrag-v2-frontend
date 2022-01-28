import { styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

const colorVariants = styleVariants({
  white: {
    fill: vars.colors.white,

    ':hover': {
      fill: vars.colors['gray-200']
    }
  },

  primary: {
    fill: vars.colors['navy-500'],

    ':hover': {
      fill: vars.colors['navy-800']
    }
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
    display: 'inline-block',

    transition: 'fill 0.2s ease-in-out'
  },

  variants: {
    size: sizeVariants,
    color: colorVariants
  },

  defaultVariants: {
    color: 'primary',
    size: 'sm'
  }
})

export type BackIconVariants = NonNullable<
RecipeVariants<typeof backIconRecipe>
>
