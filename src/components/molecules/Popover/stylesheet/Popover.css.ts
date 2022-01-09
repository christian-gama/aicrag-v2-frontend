import { createGlobalTheme, keyframes, style, styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

export const popoverVars = createGlobalTheme(':root', {
  duration: '0.3s'
})

// Variants
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

// Keyframes
const showUpAnimation = keyframes({
  '0%': {
    bottom: '-50%'
  },

  '80%': {
    bottom: '2.4rem'
  },

  '100%': {
    bottom: '1.6rem'
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

// Styles
export const popoverTextWrapper = style({
  alignItems: 'center',
  display: 'flex',
  gap: '2.4rem',
  marginRight: '1.6rem',
  maxWidth: '80%',
  minHeight: '7.6rem',
  paddingBottom: '1.6rem',
  paddingTop: '1.6rem',
  width: '100%',

  '@media': {
    [breakpoints.mobile]: {
      maxWidth: '92%',
      gap: '1.6rem'
    }
  }
})

export const popoverButtonWrapper = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  width: '8rem',
  height: '5.2rem',
  borderLeft: `1px solid ${vars.colors.white}`,

  '@media': {
    [breakpoints.mobile]: {
      width: '7.2rem'
    }
  }
})

export const popoverContent = style({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  paddingLeft: '2.4rem',
  position: 'relative',
  width: '100%',

  '@media': {
    [breakpoints.mobile]: {
      paddingLeft: '1.2rem'
    }
  }
})

// Recipes
export const popoverRecipe = recipe({
  base: {
    alignItems: 'center',
    animationDuration: '0.3s',
    animationFillMode: 'forwards',
    animationName: showUpAnimation,
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
    WebkitAnimationName: showUpAnimation,
    zIndex: '5',

    '@media': {
      [breakpoints.mobile]: {
        right: '0',
        left: '0',
        margin: '0 auto',
        maxWidth: '96vw',
        minWidth: '0',
        width: '96vw'
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
    animationDuration: popoverVars.duration,
    animationFillMode: 'forwards',
    animationName: progressAnimation,
    animationTimingFunction: 'linear',
    height: '100%'
  },

  variants: {
    type: progressBarTypeVariants
  }
})

export const progressBarWrapperRecipe = recipe({
  base: {
    height: '0.4rem',
    width: '100%'
  },

  variants: {
    type: progressBarWrapperTypeVariants
  }
})

export type PopoverVariants = NonNullable<RecipeVariants<typeof popoverRecipe>>
export type ProgressBarVariants = NonNullable<RecipeVariants<typeof progressBarRecipe>>
export type ProgressBarWrapperVariants = NonNullable<RecipeVariants<typeof progressBarWrapperRecipe>>
