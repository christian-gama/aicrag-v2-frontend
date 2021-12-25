import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/presentation/styles/vars.css'

const chevronIconHitbox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  padding: '0.8rem',
  transition: 'background-color 0.1s ease-in-out',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: vars.colors['gray-100']
  }
})

const chevronIconRecipe = recipe({
  base: {
    transition: 'background-color 0.1s ease-in-out'
  },

  variants: {
    size: {
      sm: {
        width: '1.2rem',
        height: '1.2rem'
      },
      md: {
        width: '1.6rem',
        height: '1.6rem'
      },
      lg: {
        width: '2.4rem',
        height: '2.4rem'
      }
    },
    color: {
      white: {
        fill: vars.colors.white,
        selectors: {
          '&:hover': {
            fill: vars.colors['secondary-300']
          }
        }
      },
      main: {
        fill: vars.colors['secondary-300'],
        selectors: {
          [`${chevronIconHitbox}:hover &`]: {
            fill: vars.colors['secondary-700']
          }
        }
      }
    },
    direction: {
      down: {
        transform: 'rotate(90deg)'
      },
      up: {
        transform: 'rotate(270deg)'
      },
      left: {
        transform: 'rotate(180deg)'
      },
      right: {
        transform: 'rotate(0deg)'
      }
    }
  },

  defaultVariants: {
    size: 'md',
    color: 'main',
    direction: 'right'
  }
})

export const chevronIconClasses = {
  chevronIconRecipe,
  chevronIconHitbox
}

export type ChevronIconVariants = RecipeVariants<typeof chevronIconRecipe>
