import { createGlobalTheme } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { progressAnimation } from './keyframes'
import { type } from './variants/progressBar'

export const popoverVars = createGlobalTheme(':root', {
  duration: '0.3s'
})

export const progressBarRecipe = recipe({
  base: {
    animationDuration: popoverVars.duration,
    animationFillMode: 'forwards',
    animationName: progressAnimation,
    animationTimingFunction: 'linear',
    height: '100%'
  },

  variants: {
    type
  }
})

export type ProgressBarVariants = NonNullable<RecipeVariants<typeof progressBarRecipe>>
