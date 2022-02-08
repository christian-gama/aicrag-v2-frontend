import { styleVariants, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, breakpoints } from '@/components/_settings'

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

const textAreaVariants = styleVariants({
  true: {
    resize: 'none',
    height: '10rem',

    '@media': {
      [breakpoints.tablet]: {
        height: '13rem'
      }
    }
  },

  false: {
    height: '4.8rem',

    '@media': {
      [breakpoints.tablet]: {
        height: '4.4rem'
      }
    }
  }
})

const labelFloatVariants = styleVariants({
  true: {
    top: '0',
    backgroundColor: vars.colors.white,
    padding: '0px 4px',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },

  false: {
    top: '50%',
    padding: '0',
    fontSize: vars.font.p.fontSize,
    fontWeight: 'normal'
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
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center'
})

export const inputError = style({
  marginTop: '0.4rem',
  marginLeft: '0.4rem',
  color: vars.colors['danger-400'],
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize
})

export const inputIcon = style({
  position: 'absolute',
  top: '50%',
  right: '0',
  transform: 'translate(-50%, -50%)',
  backgroundColor: vars.colors.white
})

export const inputRecipe = recipe({
  base: {
    border: 'none',
    borderRadius: '5px',
    backgroundColor: vars.colors.white,
    padding: '1rem',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    color: vars.colors.text.default,
    fontFamily: vars.font.p.fontFamily,
    fontSize: vars.font.p.fontSize,

    selectors: {
      '&:focus': {
        outline: 'none'
      },

      '&:autofill': {
        background: vars.colors.white
      }
    }
  },

  variants: {
    state: inputStateVariants,
    hasIcon: inputHasIconVariants,
    textArea: textAreaVariants
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

export type LabelRecipeVariants = NonNullable<
RecipeVariants<typeof labelRecipe>
>
export type InputRecipeVariants = NonNullable<
RecipeVariants<typeof inputRecipe>
>
