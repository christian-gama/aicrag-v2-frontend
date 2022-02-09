import {
  createGlobalTheme,
  styleVariants,
  keyframes,
  style
} from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, breakpoints } from '@/components/_settings'

export const popoverVars = createGlobalTheme(':root', {
  duration: '0.3s'
})

const progressBarWrapperTypeVariants = styleVariants({
  success: {
    backgroundColor: vars.colors['success-200']
  },

  error: {
    backgroundColor: vars.colors['danger-200']
  },

  info: {
    backgroundColor: vars.colors['info-200']
  }
})

const progressBarTypeVariants = styleVariants({
  success: {
    backgroundColor: vars.colors['success-700']
  },

  error: {
    backgroundColor: vars.colors['danger-700']
  },

  info: {
    backgroundColor: vars.colors['info-700']
  }
})

const showUpAnimation = keyframes({
  '0%': {
    bottom: '-50%'
  },

  '80%': {
    bottom: '2.4rem'
  },

  '100%': {
    bottom: '0.7rem'
  }
})

const progressAnimation = keyframes({
  '0%': {
    width: '100%'
  },

  '100%': {
    width: '0%'
  }
})

export const popoverTextWrapper = style({
  display: 'flex',
  alignItems: 'center',
  marginRight: '1.6rem',
  paddingTop: '1.6rem',
  paddingBottom: '1.6rem',
  width: '100%',
  maxWidth: '80%',
  minHeight: '7.6rem',
  gap: '2.4rem',

  '@media': {
    [breakpoints.mobile]: {
      maxWidth: '92%',
      gap: '1.6rem'
    }
  }
})

export const popoverButtonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderLeft: `1px solid ${vars.colors.white}`,
  width: '8rem',
  height: '5.2rem',

  '@media': {
    [breakpoints.mobile]: {
      width: '7.2rem'
    }
  }
})

export const popoverContent = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '2.4rem',
  width: '100%',
  height: '100%',

  '@media': {
    [breakpoints.mobile]: {
      paddingLeft: '1.2rem'
    }
  }
})

export const popoverRecipe = recipe({
  base: {
    display: 'flex',
    position: 'fixed',
    right: '0.7rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '5',
    borderRadius: '5px',
    boxShadow: vars.shadow.sm,
    minWidth: '40rem',
    maxWidth: '52rem',
    overflow: 'hidden',
    animationName: showUpAnimation,
    animationDuration: '0.3s',
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'forwards',
    WebkitAnimationFillMode: 'forwards',
    WebkitAnimationName: showUpAnimation,

    '@media': {
      [breakpoints.mobile]: {
        right: '0',
        left: '0',
        margin: '0 auto',
        width: '96vw',
        minWidth: '0',
        maxWidth: '96vw'
      }
    }
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

export const progressBarRecipe = recipe({
  base: {
    height: '100%',
    animationName: progressAnimation,
    animationDuration: popoverVars.duration,
    animationTimingFunction: 'linear',
    animationFillMode: 'forwards'
  },

  variants: {
    type: progressBarTypeVariants
  }
})

export const progressBarWrapperRecipe = recipe({
  base: {
    width: '100%',
    height: '0.4rem'
  },

  variants: {
    type: progressBarWrapperTypeVariants
  }
})

export type PopoverVariants = NonNullable<RecipeVariants<typeof popoverRecipe>>
export type ProgressBarVariants = NonNullable<
RecipeVariants<typeof progressBarRecipe>
>
export type ProgressBarWrapperVariants = NonNullable<
RecipeVariants<typeof progressBarWrapperRecipe>
>
