import { style, styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings/vars.css'
import { sizeVariants } from '../../common/variants/size.css'

// Styles
export const chevronIconHitbox = style({
  alignItems: 'center',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  padding: '0.8rem',
  transition: 'background-color 0.1s ease-in-out',

  ':hover': {
    cursor: 'pointer'
  }
})

// Variants
const colorVariants = styleVariants({
  white: {
    fill: vars.colors.white,

    selectors: {
      [`${chevronIconHitbox}:hover &`]: {
        fill: vars.colors['gray-400']
      }
    }
  },

  main: {
    fill: vars.colors['cyan-600'],

    selectors: {
      [`${chevronIconHitbox}:hover &`]: {
        fill: vars.colors['cyan-600']
      }
    }
  }
})

const directionVariants = styleVariants({
  down: {
    transform: 'rotate(90deg)'
  },

  up: {
    transform: 'rotate(270deg)'
  },

  left: {
    transform: 'rotate(180deg)'
  },

  right: {
    transform: 'rotate(0deg)'
  }
})

// Recipes
export const chevronIconRecipe = recipe({
  base: {
    transition: 'fill 0.1s ease-in-out, background-color 0.1s ease-in-out'
  },

  variants: {
    size: sizeVariants,
    color: colorVariants,
    direction: directionVariants
  },

  defaultVariants: {
    size: 'md',
    color: 'main',
    direction: 'right'
  }
})

export type ChevronIconVariants = NonNullable<
RecipeVariants<typeof chevronIconRecipe>
>
