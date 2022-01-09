import { style, styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

// Variants
const inputStateVariants = styleVariants({
  error: {
    boxShadow: `0 0 0 1px ${vars.colors['danger-400']}`,

    ':focus': {
      boxShadow: `inset 0 0 0 3px ${vars.colors['danger-400']}`
    }
  },

  success: {
    boxShadow: `0 0 0 1px ${vars.colors['success-400']}`,

    ':focus': {
      boxShadow: `inset 0 0 0 3px ${vars.colors['success-400']}`
    }
  },

  default: {
    boxShadow: `0 0 0 1px ${vars.colors['navy-500']}`,

    ':focus': {
      boxShadow: `inset 0 0 0 3px ${vars.colors['navy-500']}`
    }
  }
})

const inputHasIconVariants = styleVariants({
  true: {
    paddingRight: '4.8rem'
  }
})

const labelFloatVariants = styleVariants({
  true: {
    backgroundColor: vars.colors.white,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '0px 4px',
    top: '0'
  },

  false: {
    fontWeight: 'normal',
    padding: '0',
    top: '50%',
    fontSize: vars.font.p.fontSize
  }
})

const labelStateVariants = styleVariants({
  error: {
    color: vars.colors['danger-400']
  },

  success: {
    color: vars.colors['success-400']
  },

  default: {
    color: vars.colors['navy-500']
  }
})

// Styles
export const input = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%'
})

export const inputBox = style({
  position: 'relative'
})

export const inputContent = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative'
})

export const inputError = style({
  color: vars.colors['danger-400'],
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize,
  marginLeft: '0.4rem',
  marginTop: '0.4rem'
})

export const inputIcon = style({
  backgroundColor: vars.colors.white,
  position: 'absolute',
  right: '0',
  top: '50%',
  transform: 'translate(-50%, -50%)'
})

// Recipes
export const inputRecipe = recipe({
  base: {
    backgroundColor: vars.colors.white,
    border: 'none',
    borderRadius: '5px',
    color: vars.colors.text.default,
    fontFamily: vars.font.p.fontFamily,
    fontSize: vars.font.p.fontSize,
    height: '4.8rem',
    maxWidth: '100%',
    minWidth: '100%',
    padding: '1rem',
    width: '100%',

    selectors: {
      '&:focus': {
        outline: 'none'
      },

      '&:autofill': {
        background: vars.colors.white
      }
    },

    '@media': {
      [breakpoints.mobile]: {
        height: '4.4rem'
      }
    }
  },

  variants: {
    state: inputStateVariants,
    hasIcon: inputHasIconVariants
  }
})

export const labelRecipe = recipe({
  base: {
    left: '1rem',
    lineHeight: '1',
    fontFamily: vars.font.p.fontFamily,
    position: 'absolute',
    transform: 'translateY(-50%)',
    transition:
      'top 0.2s ease 0s, font-weight 0s linear 0.1s, padding 0.2s ease-in-out, font-size 0.2s ease, background-color 0.2s ease',
    zIndex: 1,

    ':hover': {
      cursor: 'text'
    }
  },

  variants: {
    state: labelStateVariants,
    float: labelFloatVariants
  }
})

export type LabelRecipeVariants = NonNullable<RecipeVariants<typeof labelRecipe>>
export type InputRecipeVariants = NonNullable<RecipeVariants<typeof inputRecipe>>
