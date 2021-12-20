import { keyframes } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/presentation/styles/vars.css'

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

export const loadingSpinnerRecipe = recipe({
  base: {
    display: 'inline-block',
    animationName: rotate,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out'
  },
  variants: {
    size: {
      sm: {
        width: '2.6rem',
        height: '2.6rem'
      },
      lg: {
        width: '6.7rem',
        height: '6.7rem'
      }
    },
    color: {
      main: {
        fill: vars.colors['primary-600']
      },
      white: {
        fill: vars.colors.white
      }
    },
    speed: {
      slow: {
        animationDuration: '2s'
      },
      fast: {
        animationDuration: '1s'
      }
    },
    space: {
      sm: {
        margin: '0 .5rem'
      },
      md: {
        margin: '0 1rem'
      },
      lg: {
        margin: '0 2rem'
      }
    }
  },

  defaultVariants: {
    size: 'sm',
    color: 'main',
    speed: 'fast',
    space: 'md'
  }
})

export type LoadingSpinnerVariants = RecipeVariants<typeof loadingSpinnerRecipe>
