import { keyframes } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings'

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

export const modalRecipe = recipe({
  base: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: '11',
    animationDuration: '0.3s',
    animationTimingFunction: 'ease',
    animationIterationCount: '1',
    animationFillMode: 'forwards',

    '@media': {
      [breakpoints.mobile]: {
        top: '0%',
        right: '0%',
        bottom: '0%',
        left: '0%',
        transform: 'translate(0%, 0%)',
        animation: 'none'
      }
    }
  },

  variants: {
    direction: {
      top: {
        top: '-50%',
        left: '50%',
        animationName: fromTopAnimation
      },

      right: {
        top: '50%',
        left: '100%',
        animationName: fromRightAnimation
      },

      bottom: {
        top: '100%',
        left: '50%',
        animationName: fromBottomAnimation
      },

      left: {
        top: '50%',
        left: '-50%',
        animationName: fromLeftAnimation
      }
    }
  },

  defaultVariants: {
    direction: 'top'
  }
})

export type ModalRecipeVariants = NonNullable<
RecipeVariants<typeof modalRecipe>
>
