import { createGlobalTheme, keyframes, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

export const popoverVars = createGlobalTheme(':root', {
  duration: '0.3s'
})

const popoverStyle = style({
  position: 'fixed',
  bottom: '1.6rem',
  right: '1.6rem',
  alignItems: 'center',
  borderRadius: '5px',
  boxShadow: vars.shadow.light,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '50rem',
  overflow: 'hidden'
})

const popoverRecipe = recipe({
  base: [popoverStyle],

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

const textWrapperStyle = style({
  alignItems: 'center',
  display: 'flex',
  gap: '2.4rem',
  maxWidth: '80%',
  width: '100%',
  minHeight: '7.6rem',
  paddingTop: '1.6rem',
  paddingBottom: '1.6rem',
  marginRight: '1.6rem'
})

const contentWrapperStyle = style({
  alignItems: 'center',
  justifyContent: 'space-between',
  display: 'flex',
  paddingLeft: '2.4rem',
  position: 'relative',
  width: '100%',
  height: '100%'
})

const closeButtonWrapperStyle = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '8rem',
  height: '5.2rem',
  borderLeft: `1px solid ${vars.colors.white}`
})

const progressBarAnimation = keyframes({
  '0%': {
    width: '100%'
  },
  '100%': {
    width: '0%'
  }
})

const progressBarRecipe = recipe({
  base: {
    height: '100%',
    animationName: progressBarAnimation,
    animationDuration: popoverVars.duration,
    animationTimingFunction: 'linear',
    animationFillMode: 'forwards'
  },

  variants: {
    type: {
      success: {
        backgroundColor: vars.colors['success-500']
      },
      error: {
        backgroundColor: vars.colors['danger-500']
      },
      info: {
        backgroundColor: vars.colors['info-500']
      }
    }
  }
})

const progressBarWrapperRecipe = recipe({
  base: {
    height: '0.4rem',
    width: '100%',
    filter: 'grayscale(40%)'
  },

  variants: {
    type: {
      success: {
        backgroundColor: vars.colors['success-200']
      },
      error: {
        backgroundColor: vars.colors['danger-200']
      },
      info: {
        backgroundColor: vars.colors['info-200']
      }
    }
  }
})

export const popoverClasses = {
  closeButtonWrapperStyle,
  contentWrapperStyle,
  popoverRecipe,
  progressBarWrapperRecipe,
  progressBarRecipe,
  textWrapperStyle
}

export type PopoverVariants = NonNullable<RecipeVariants<typeof popoverRecipe>> &
NonNullable<RecipeVariants<typeof progressBarRecipe>> &
NonNullable<RecipeVariants<typeof progressBarWrapperRecipe>>
