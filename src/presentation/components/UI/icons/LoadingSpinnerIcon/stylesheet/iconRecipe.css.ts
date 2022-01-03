import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { rotate } from './keyframes'
import { size, color, speed, space } from './variants'

export const iconRecipe = recipe({
  base: {
    display: 'inline-block',
    animationName: rotate,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  },

  variants: {
    size,
    color,
    speed,
    space
  },

  defaultVariants: {
    size: 'sm',
    color: 'main',
    speed: 'normal',
    space: 'md'
  }
})

export type LoadingSpinnerVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
