import { keyframes, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

const fromLeft = keyframes({
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

const fromTop = keyframes({
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

const fromRight = keyframes({
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

const fromBottom = keyframes({
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

const backdropStyle = style({
  position: 'fixed',
  zIndex: '10',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '@supports': {
    '(webkitBackdropFilter: none) or (backdrop-filter: none)': {
      WebkitBackdropFilter: 'blur(2px)',
      backdropFilter: 'blur(2px)'
    }
  }
})

const modalRecipe = recipe({
  base: {
    zIndex: '11',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    animationIterationCount: '1',
    animationDuration: '0.3s',
    animationTimingFunction: 'ease',
    animationFillMode: 'forwards'
  },

  variants: {
    direction: {
      top: {
        top: '-50%',
        left: '50%',
        animationName: fromTop
      },
      right: {
        right: '-50%',
        top: '50%',
        animationName: fromRight
      },
      bottom: {
        bottom: '-50%',
        left: '50%',
        animationName: fromBottom
      },
      left: {
        left: '-50%',
        top: '50%',
        animationName: fromLeft
      }
    }
  },

  defaultVariants: {
    direction: 'top'
  }
})

export const modalClasses = {
  backdropStyle,
  modalRecipe
}

export type ModalRecipeVariants = NonNullable<RecipeVariants<typeof modalRecipe>>
