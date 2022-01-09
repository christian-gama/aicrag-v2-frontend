import { keyframes, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings/breakpoints.css'

// Keyframes
const fromBottomAnimation = keyframes({
  '0%': {
    bottom: '-100%'
  },

  '80%': {
    bottom: '60%'
  },

  '100%': {
    bottom: '50%'
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
    right: '-100%'
  },
  '80%': {
    right: '60%'
  },
  '100%': {
    right: '50%'
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

// Styles
export const backdrop = style({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height: '100vh',
  position: 'fixed',
  width: '100vw',
  zIndex: '10',

  '@supports': {
    '(webkitBackdropFilter: none) or (backdrop-filter: none)': {
      backdropFilter: 'blur(2px)',
      WebkitBackdropFilter: 'blur(2px)'
    }
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
        right: '-50%',
        top: '50%'
      },

      bottom: {
        animationName: fromBottomAnimation,
        bottom: '-50%',
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
