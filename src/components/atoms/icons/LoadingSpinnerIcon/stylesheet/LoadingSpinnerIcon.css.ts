import { keyframes, styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings/vars.css'

// Keyframes
const rotateAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)' },

  '100%': { transform: 'rotate(360deg)' }
})

// Variants
const colorVariants = styleVariants({
  main: {
    fill: vars.colors['navy-600']
  },

  white: {
    fill: vars.colors.white
  }
})

const sizeVariants = styleVariants({
  sm: {
    width: '1.6rem',
    height: '1.6rem'
  },

  md: {
    width: '2.6rem',
    height: '2.6rem'
  },

  lg: {
    width: '6.7rem',
    height: '6.7rem'
  }
})

const spaceVariants = styleVariants({
  sm: {
    margin: '0 .5rem'
  },

  md: {
    margin: '0 1rem'
  },

  lg: {
    margin: '0 2rem'
  }
})

const speedVariants = styleVariants({
  slow: {
    animationDuration: '1.8s'
  },

  normal: {
    animationDuration: '1s'
  },

  fast: {
    animationDuration: '0.65s'
  }
})

// Recipes
export const loadingSpinnerIconRecipe = recipe({
  base: {
    display: 'inline-block',
    animationName: rotateAnimation,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  },

  variants: {
    size: sizeVariants,
    color: colorVariants,
    speed: speedVariants,
    space: spaceVariants
  },

  defaultVariants: {
    size: 'sm',
    color: 'main',
    speed: 'normal',
    space: 'md'
  }
})

export type LoadingSpinnerVariants = NonNullable<
RecipeVariants<typeof loadingSpinnerIconRecipe>
>
