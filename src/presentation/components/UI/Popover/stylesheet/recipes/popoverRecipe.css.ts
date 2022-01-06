import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'
import { showUp } from '../keyframes'

export const popoverRecipe = recipe({
  base: {
    alignItems: 'center',
    animationDuration: '0.3s',
    animationFillMode: 'forwards',
    animationName: showUp,
    animationTimingFunction: 'ease-in-out',
    borderRadius: '5px',
    boxShadow: vars.shadow.sm,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '52rem',
    minWidth: '40rem',
    overflow: 'hidden',
    position: 'fixed',
    right: '1.6rem',
    WebkitAnimationFillMode: 'forwards',
    WebkitAnimationName: showUp,
    zIndex: '5'
  },

  variants: {
    type: {
      success: {
        backgroundColor: vars.colors['success-400']
      },

      error: {
        backgroundColor: vars.colors['danger-400']
      },

      info: {
        backgroundColor: vars.colors['info-400']
      }
    }
  }
})

export type PopoverVariants = NonNullable<RecipeVariants<typeof popoverRecipe>>
