import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/presentation/styles/vars.css'

export const buttonRecipe = recipe({
  base: {
    borderRadius: 5,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none'
  },

  variants: {
    disabled: {
      true: 'true',
      false: 'false'
    },
    mode: {
      contained: 'contained',
      outlined: 'outlined',
      text: {
        backgroundColor: vars.colors.transparent,
        border: 0,
        color: vars.colors.text.normal
      }
    },
    size: {
      sm: { width: '13rem', height: '4.4rem' },
      md: { width: '16rem', height: '4.8rem' },
      lg: { width: '25rem', height: '4.8rem' },
      xlg: { width: '34rem', height: '4.8rem' }
    },
    color: {
      main: 'main',
      danger: 'danger'
    }
  },

  compoundVariants: [
    {
      variants: {
        mode: 'contained',
        color: 'main'
      },
      style: {
        backgroundColor: vars.colors['secondary-300'],
        color: vars.colors.white,
        ':hover': {
          backgroundColor: vars.colors['secondary-100']
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
          backgroundColor: vars.colors['danger-200']
        }
      }
    },
    {
      variants: {
        mode: 'outlined',
        color: 'main'
      },
      style: {
        backgroundColor: vars.colors.transparent,
        color: vars.colors['secondary-300'],
        border: `1px solid ${vars.colors['secondary-300']}`,
        ':hover': {
          border: `1px solid ${vars.colors['secondary-100']}`,
          backgroundColor: vars.colors['tertiary-100'],
          color: vars.colors['secondary-100']
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
          border: `1px solid ${vars.colors['danger-200']}`,
          color: vars.colors['danger-200']
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

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>
