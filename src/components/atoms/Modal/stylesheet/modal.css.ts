import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { fromBottom, fromLeft, fromRight, fromTop } from './keyframes'

const backdropStyle = style({
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

const modalRecipe = recipe({
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
        animationName: fromTop,
        left: '50%',
        top: '-50%'
      },

      right: {
        animationName: fromRight,
        right: '-50%',
        top: '50%'
      },

      bottom: {
        animationName: fromBottom,
        bottom: '-50%',
        left: '50%'
      },

      left: {
        animationName: fromLeft,
        left: '-50%',
        top: '50%'
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
