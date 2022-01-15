import { styleVariants, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

// Variants
const colorVariants = styleVariants({
  danger: {},
  info: {},
  light: {},
  cyan: {}
})

const disabledVariants = styleVariants({
  true: {},
  false: {}
})

const sizeVariants = styleVariants({
  sm: {
    width: '13rem',
    height: '4.4rem',

    '@media': {
      [breakpoints.mobile]: {
        width: '11.2rem',
        height: '4.2rem'
      }
    }
  },

  md: {
    width: '16rem',
    height: '4.8rem',

    '@media': {
      [breakpoints.mobile]: {
        width: '14rem',
        height: '4.4rem'
      }
    }
  },

  lg: {
    width: '25rem',
    height: '4.8rem',

    '@media': {
      [breakpoints.mobile]: {
        width: '23.6rem',
        height: '4.4rem'
      }
    }
  },

  xlg: {
    width: '34rem',
    height: '4.8rem',

    '@media': {
      [breakpoints.mobile]: {
        width: '30rem',
        height: '4.4rem'
      }
    }
  }
})

const modeVariants = styleVariants({
  contained: {},
  outlined: {}
})

// Compound Variants
// Cyan
const containedCyanStyle = style({
  backgroundColor: vars.colors['cyan-900'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['cyan-700'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['cyan-100']}`
  }
})

const outlinedCyanStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['cyan-900']}`,
  color: vars.colors['cyan-900'],

  ':hover': {
    backgroundColor: vars.colors['cyan-900'],
    border: 'none',
    color: vars.colors.white,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['cyan-100']}`
  }
})

// Danger
const containedDangerStyle = style({
  backgroundColor: vars.colors['danger-400'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['danger-700'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['danger-50']}`
  }
})

const outlinedDangerStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['danger-400']}`,
  color: vars.colors['danger-400'],

  ':hover': {
    backgroundColor: vars.colors['danger-400'],
    border: 'none',
    color: vars.colors.white,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['danger-50']}`
  }
})

// Disabled
const containedDisabledStyle = style({
  backgroundColor: vars.colors['gray-600'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['gray-600'],
    cursor: 'not-allowed'
  }
})

const outlinedDisabledStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['gray-600']}`,
  color: vars.colors['gray-600'],

  ':hover': {
    backgroundColor: vars.colors.transparent,
    border: `1px solid ${vars.colors['gray-600']}`,
    color: vars.colors['gray-600'],
    cursor: 'not-allowed'
  }
})

// Info
const containedInfoStyle = style({
  backgroundColor: vars.colors['info-400'],
  color: vars.colors.white,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['info-900'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['info-50']}`
  }
})

const outlinedInfoStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors['info-400']}`,
  color: vars.colors['info-400'],

  ':hover': {
    backgroundColor: vars.colors['info-400'],
    border: 'none',
    color: vars.colors.white,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['info-50']}`
  }
})

// Light
const containedLightStyle = style({
  backgroundColor: vars.colors['gray-50'],
  color: vars.colors.text.default,
  border: 'none',

  ':hover': {
    backgroundColor: vars.colors['gray-100'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['gray-200']}`
  }
})

const outlinedLightStyle = style({
  backgroundColor: vars.colors.transparent,
  border: `1px solid ${vars.colors.text.default}`,
  color: vars.colors.text.default,

  ':hover': {
    backgroundColor: vars.colors['gray-100'],
    border: 'none',
    color: vars.colors.text.dark,
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['gray-200']}`
  }
})

// Recipes
export const buttonRecipe = recipe({
  base: {
    alignItems: 'center',
    borderRadius: '5px',
    display: 'flex',
    fontFamily: vars.font.button.fontFamily,
    fontSize: vars.font.button.fontSize,
    justifyContent: 'center',
    textTransform: vars.font.button.textTransform,
    transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out'
  },

  variants: {
    color: colorVariants,
    disabled: disabledVariants,
    mode: modeVariants,
    size: sizeVariants
  },

  compoundVariants: [
    /* ------- CONTAINED ------- */
    {
      variants: {
        mode: 'contained',
        color: 'cyan',
        disabled: false
      },

      style: containedCyanStyle
    },

    {
      variants: {
        mode: 'contained',
        color: 'danger',
        disabled: false
      },

      style: containedDangerStyle
    },

    {
      variants: {
        mode: 'contained',
        color: 'info',
        disabled: false
      },
      style: containedInfoStyle
    },

    {
      variants: {
        mode: 'contained',
        color: 'light',
        disabled: false
      },
      style: containedLightStyle
    },

    {
      variants: {
        mode: 'contained',
        disabled: true
      },
      style: containedDisabledStyle
    },

    /* -------- OUTLINED -------- */
    {
      variants: {
        mode: 'outlined',
        color: 'cyan',
        disabled: false
      },

      style: outlinedCyanStyle
    },

    {
      variants: {
        mode: 'outlined',
        color: 'danger',
        disabled: false
      },

      style: outlinedDangerStyle
    },

    {
      variants: {
        mode: 'outlined',
        color: 'info',
        disabled: false
      },

      style: outlinedInfoStyle
    },

    {
      variants: {
        mode: 'outlined',
        color: 'light',
        disabled: false
      },

      style: outlinedLightStyle
    },

    {
      variants: {
        mode: 'outlined',
        disabled: true
      },

      style: outlinedDisabledStyle
    }
  ],

  defaultVariants: {
    mode: 'contained',
    color: 'cyan',
    size: 'md',
    disabled: false
  }
})

export type ButtonVariants = NonNullable<RecipeVariants<typeof buttonRecipe>>
