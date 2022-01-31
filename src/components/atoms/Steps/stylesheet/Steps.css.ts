import { createGlobalTheme } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings'

export const stepGapVars = createGlobalTheme(':root', {
  gap: '6.8rem'
})

const stepSizeVars = {
  size: '2.8rem'
}

export const stepsRecipe = recipe({
  base: {
    display: 'flex',
    gap: stepGapVars.gap
  },

  variants: {
    direction: {
      column: {
        flexDirection: 'column',
        alignItems: 'center'
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'center'
      }
    }
  },

  defaultVariants: {
    direction: 'column'
  }
})

export const stepItemRecipe = recipe({
  base: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border 0.3s ease-in-out, background 0.2s ease-in-out 0.3s',
    borderRadius: '50%',
    width: stepSizeVars.size,
    height: stepSizeVars.size,

    selectors: {
      '&:not(:first-child):before, &:not(:first-child):after': {
        position: 'absolute',
        transition:
          'border 0.3s ease-in-out, background-color 0.2s ease-in-out',
        zIndex: '-1',
        content: ''
      }
    }
  },

  variants: {
    direction: {
      column: {
        selectors: {
          '&:not(:first-child):before, &:not(:first-child):after': {
            bottom: '100%',
            width: '1px',
            height: calc.add(stepGapVars.gap, '2px')
          }
        }
      },
      row: {
        selectors: {
          '&:not(:first-child):before, &:not(:first-child):after': {
            right: '100%',
            width: calc.add(stepGapVars.gap, '2px'),
            height: '1px'
          }
        }
      }
    },

    check: {
      true: {
        border: `1px solid ${vars.colors['success-700']}`,
        backgroundColor: vars.colors['success-700'],

        selectors: {
          '&:not(:first-child):before, &:not(:first-child):after': {
            backgroundColor: vars.colors['success-700']
          }
        }
      },

      false: {
        border: `1px solid ${vars.colors['gray-200']}`,

        selectors: {
          '&:not(:first-child):before, &:not(:first-child):after': {
            backgroundColor: vars.colors['gray-200']
          }
        }
      }
    }
  },

  defaultVariants: {
    direction: 'column',
    check: false
  }
})

export const stepItemLabelRecipe = recipe({
  base: {
    position: 'absolute',
    whiteSpace: 'nowrap',
    color: vars.colors.text.default,
    fontFamily: vars.font.hint.fontFamily,
    fontSize: vars.font.hint.fontSize
  },

  variants: {
    direction: {
      column: {
        left: stepSizeVars.size,
        marginLeft: '1.2rem'
      },
      row: {
        top: stepSizeVars.size,
        marginTop: '0.4rem'
      }
    }
  },

  defaultVariants: {
    direction: 'column'
  }
})

export type StepsVariants = NonNullable<RecipeVariants<typeof stepsRecipe>> &
NonNullable<RecipeVariants<typeof stepItemRecipe>>
