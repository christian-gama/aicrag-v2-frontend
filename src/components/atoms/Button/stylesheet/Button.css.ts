import { styleVariants, style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints, vars } from '@/components/_settings'

const colorVariants = styleVariants({
  danger: {},
  info: {},
  light: {},
  cyan: {},
  warning: {}
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

const containedCyanStyle = style({
  border: 'none',
  backgroundColor: vars.colors['cyan-900'],
  color: vars.colors.white,

  ':hover': {
    backgroundColor: vars.colors['cyan-800'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['cyan-100']}`
  }
})

const outlinedCyanStyle = style({
  border: `1px solid ${vars.colors['cyan-900']}`,
  backgroundColor: vars.colors.transparent,
  color: vars.colors['cyan-900'],

  ':hover': {
    border: 'none',
    backgroundColor: vars.colors['cyan-900'],
    cursor: 'pointer',
    color: vars.colors.white
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['cyan-100']}`
  }
})

const containedWarningStyle = style({
  border: 'none',
  backgroundColor: vars.colors['warning-500'],
  color: vars.colors.white,

  ':hover': {
    backgroundColor: vars.colors['warning-800'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['warning-100']}`
  }
})

const outlinedWarningStyle = style({
  border: `1px solid ${vars.colors['warning-800']}`,
  backgroundColor: vars.colors.transparent,
  color: vars.colors['warning-800'],

  ':hover': {
    border: 'none',
    backgroundColor: vars.colors['warning-800'],
    cursor: 'pointer',
    color: vars.colors.white
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['warning-100']}`
  }
})

const containedDangerStyle = style({
  border: 'none',
  backgroundColor: vars.colors['danger-400'],
  color: vars.colors.white,

  ':hover': {
    backgroundColor: vars.colors['danger-700'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['danger-50']}`
  }
})

const outlinedDangerStyle = style({
  border: `1px solid ${vars.colors['danger-400']}`,
  backgroundColor: vars.colors.transparent,
  color: vars.colors['danger-400'],

  ':hover': {
    border: 'none',
    backgroundColor: vars.colors['danger-400'],
    cursor: 'pointer',
    color: vars.colors.white
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['danger-50']}`
  }
})

const containedDisabledStyle = style({
  border: 'none',
  backgroundColor: vars.colors['gray-600'],
  color: vars.colors.white,

  ':hover': {
    backgroundColor: vars.colors['gray-600'],
    cursor: 'not-allowed'
  }
})

const outlinedDisabledStyle = style({
  border: `1px solid ${vars.colors['gray-600']}`,
  backgroundColor: vars.colors.transparent,
  color: vars.colors['gray-600'],

  ':hover': {
    border: `1px solid ${vars.colors['gray-600']}`,
    backgroundColor: vars.colors.transparent,
    cursor: 'not-allowed',
    color: vars.colors['gray-600']
  }
})

const containedInfoStyle = style({
  border: 'none',
  backgroundColor: vars.colors['info-400'],
  color: vars.colors.white,

  ':hover': {
    backgroundColor: vars.colors['info-900'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['info-50']}`
  }
})

const outlinedInfoStyle = style({
  border: `1px solid ${vars.colors['info-400']}`,
  backgroundColor: vars.colors.transparent,
  color: vars.colors['info-400'],

  ':hover': {
    border: 'none',
    backgroundColor: vars.colors['info-400'],
    cursor: 'pointer',
    color: vars.colors.white
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['info-50']}`
  }
})

const containedLightStyle = style({
  border: 'none',
  backgroundColor: vars.colors['gray-50'],
  color: vars.colors.text.default,

  ':hover': {
    backgroundColor: vars.colors['gray-100'],
    cursor: 'pointer'
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['gray-200']}`
  }
})

const outlinedLightStyle = style({
  border: `1px solid ${vars.colors.text.default}`,
  backgroundColor: vars.colors.transparent,
  color: vars.colors.text.default,

  ':hover': {
    border: 'none',
    backgroundColor: vars.colors['gray-100'],
    cursor: 'pointer',
    color: vars.colors.text.dark
  },

  ':focus': {
    boxShadow: `0 0 1px 4px ${vars.colors['gray-200']}`
  }
})

export const buttonRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition:
      'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out',
    borderRadius: '5px',
    textTransform: vars.font.button.textTransform,
    fontFamily: vars.font.button.fontFamily,
    fontSize: vars.font.button.fontSize,

    ':disabled': {
      cursor: 'not-allowed'
    }
  },

  variants: {
    color: colorVariants,
    disabled: disabledVariants,
    mode: modeVariants,
    size: sizeVariants
  },

  compoundVariants: [
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
        color: 'warning',
        disabled: false
      },

      style: containedWarningStyle
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
        color: 'warning',
        disabled: false
      },

      style: outlinedWarningStyle
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
