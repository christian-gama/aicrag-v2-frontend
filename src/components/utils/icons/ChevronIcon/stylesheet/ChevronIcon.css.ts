import { styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings'
import { sizeVariants } from '../..'

const colorVariants = styleVariants({
  white: {
    fill: vars.colors.white
  },

  main: {
    fill: vars.colors['cyan-600']
  },

  primary: {
    fill: vars.colors['navy-500']
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

export const chevronIconRecipe = recipe({
  base: {
    transition: 'fill 0.3s ease-in-out, background-color 0.3s ease-in-out'
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
