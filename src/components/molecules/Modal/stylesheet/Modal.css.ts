import { keyframes } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings/breakpoints.css'

// Keyframes
const fromBottomAnimation = keyframes({
  '0%': {
    top: '100%'
  },

  '80%': {
    top: '40%'
  },

  '100%': {
    top: '50%'
  }
})

const fromLeftAnimation = keyframes({
  '0%': {
    left: '-100%'
  },

  '80%': {
    left: '60%'
  },

  '100%': {
    left: '50%'
  }
})

const fromRightAnimation = keyframes({
  '0%': {
    left: '100%'
  },

  '80%': {
    left: '40%'
  },

  '100%': {
    left: '50%'
  }
})

const fromTopAnimation = keyframes({
  '0%': {
    top: '-100%'
  },

  '80%': {
    top: '60%'
  },

  '100%': {
    top: '50%'
  }
})

// Recipes
export const modalRecipe = recipe({
  base: {
    animationDuration: '0.3s',
    animationFillMode: 'forwards',
    animationIterationCount: '1',
    animationTimingFunction: 'ease',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: '11',

    '@media': {
      [breakpoints.mobile]: {
        animation: 'none',
        bottom: '0%',
        left: '0%',
        right: '0%',
        top: '0%',
        transform: 'translate(0%, 0%)'
      }
    }
  },

  variants: {
    direction: {
      top: {
        animationName: fromTopAnimation,
        left: '50%',
        top: '-50%'
      },

      right: {
        animationName: fromRightAnimation,
        left: '100%',
        top: '50%'
      },

      bottom: {
        animationName: fromBottomAnimation,
        top: '100%',
        left: '50%'
      },

      left: {
        animationName: fromLeftAnimation,
        left: '-50%',
        top: '50%'
      }
    }
  },

  defaultVariants: {
    direction: 'top'
  }
})

export type ModalRecipeVariants = NonNullable<RecipeVariants<typeof modalRecipe>>
