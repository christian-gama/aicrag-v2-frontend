import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

export const buttonRecipe = recipe({
  base: {
    borderRadius: 5,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    fontSize: vars.font.button.fontSize,
    textTransform: vars.font.button.textTransform,
    fontFamily: vars.font.button.fontFamily,
    transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out'
  },

  variants: {
    disabled: {
      true: 'true',
      false: 'false'
    },
    mode: {
      contained: 'contained',
      outlined: 'outlined'
    },
    size: {
      sm: { width: '13rem', height: '4.4rem' },
      md: { width: '16rem', height: '4.8rem' },
      lg: { width: '25rem', height: '4.8rem' },
      xlg: { width: '34rem', height: '4.8rem' }
    },
    color: {
      main: 'main',
      danger: 'danger',
      light: 'light',
      info: 'info'
    }
  },

  compoundVariants: [
    // CONTAINED
    {
      variants: {
        mode: 'contained',
        color: 'main'
      },
      style: {
        backgroundColor: vars.colors['secondary-600'],
        color: vars.colors.white,
        ':hover': {
          backgroundColor: vars.colors['secondary-700']
        },
        ':focus': {
          boxShadow: `0 0 1px 4px ${vars.colors['secondary-100']}`
        }
      }
    },

    {
      variants: {
        mode: 'contained',
        color: 'danger'
      },
      style: {
        backgroundColor: vars.colors['danger-300'],
        color: vars.colors.white,
        ':hover': {
          backgroundColor: vars.colors['danger-400']
        },
        ':focus': {
          boxShadow: `0 0 1px 4px ${vars.colors['danger-100']}`
        }
      }
    },

    {
      variants: {
        mode: 'contained',
        color: 'info'
      },
      style: {
        backgroundColor: vars.colors['info-300'],
        color: vars.colors.white,
        ':hover': {
          backgroundColor: vars.colors['info-400']
        },
        ':focus': {
          boxShadow: `0 0 1px 4px ${vars.colors['info-100']}`
        }
      }
    },

    {
      variants: {
        mode: 'contained',
        color: 'light'
      },
      style: {
        backgroundColor: vars.colors['gray-50'],
        color: vars.colors.text.default,
        ':hover': {
          backgroundColor: vars.colors['gray-100']
        },
        ':focus': {
          boxShadow: `0 0 1px 4px ${vars.colors['gray-200']}`
        }
      }
    },

    {
      variants: {
        mode: 'contained',
        disabled: true
      },
      style: {
        backgroundColor: vars.colors['gray-500'],
        color: vars.colors.white,
        ':hover': {
          backgroundColor: vars.colors['gray-500'],
          cursor: 'not-allowed'
        }
      }
    },

    // OUTLINED
    {
      variants: {
        mode: 'outlined',
        color: 'main'
      },
      style: {
        backgroundColor: vars.colors.transparent,
        color: vars.colors['secondary-600'],
        border: `1px solid ${vars.colors['secondary-600']}`,
        ':hover': {
          backgroundColor: vars.colors['secondary-600'],
          color: vars.colors.white,
          border: 'none'
        },
        ':focus': {
          boxShadow: `0 0 1px 4px ${vars.colors['secondary-100']}`
        }
      }
    },

    {
      variants: {
        mode: 'outlined',
        color: 'danger'
      },
      style: {
        backgroundColor: vars.colors.transparent,
        color: vars.colors['danger-300'],
        border: `1px solid ${vars.colors['danger-300']}`,
        ':hover': {
          backgroundColor: vars.colors['danger-300'],
          color: vars.colors.white,
          border: 'none'
        },
        ':focus': {
          boxShadow: `0 0 1px 4px ${vars.colors['danger-100']}`
        }
      }
    },

    {
      variants: {
        mode: 'outlined',
        color: 'info'
      },
      style: {
        backgroundColor: vars.colors.transparent,
        color: vars.colors['info-300'],
        border: `1px solid ${vars.colors['info-300']}`,
        ':hover': {
          backgroundColor: vars.colors['info-300'],
          color: vars.colors.white,
          border: 'none'
        },
        ':focus': {
          boxShadow: `0 0 1px 4px ${vars.colors['info-100']}`
        }
      }
    },

    {
      variants: {
        mode: 'outlined',
        color: 'light'
      },
      style: {
        backgroundColor: vars.colors.transparent,
        color: vars.colors['gray-800'],
        border: `1px solid ${vars.colors['gray-400']}`,
        ':hover': {
          backgroundColor: vars.colors['gray-50'],
          color: vars.colors.text.default,
          border: 'none'
        },
        ':focus': {
          boxShadow: `0 0 1px 4px ${vars.colors['gray-200']}`
        }
      }
    },

    {
      variants: {
        mode: 'outlined',
        disabled: true
      },
      style: {
        backgroundColor: vars.colors.transparent,
        border: `1px solid ${vars.colors['gray-600']}`,
        color: vars.colors['gray-600'],
        ':hover': {
          backgroundColor: vars.colors.transparent,
          border: `1px solid ${vars.colors['gray-600']}`,
          color: vars.colors['gray-600'],
          cursor: 'not-allowed'
        }
      }
    }
  ],

  defaultVariants: {
    mode: 'contained',
    color: 'main',
    size: 'md',
    disabled: false
  }
})

export type ButtonVariants = NonNullable<RecipeVariants<typeof buttonRecipe>>
