import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

const center = style({
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column'
})

const font = style({
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize
})

const containerStyle = style([
  center,
  {
    width: '100%',
    marginTop: '1rem',
    selectors: {
      '&:first-of-type': {
        marginTop: '0'
      }
    }
  }
])

const contentStyle = style([
  center,
  {
    position: 'relative'
  }
])

const labelRecipe = recipe({
  base: [
    font,
    {
      backgroundColor: vars.colors.white,
      color: vars.colors['secondary-300'],
      left: '1rem',
      lineHeight: '1',
      position: 'absolute',
      transform: 'translateY(-50%)',
      padding: '0',
      transition: 'top 0.2s ease 0s, font-weight 0s linear 0.1s, padding 0.2s ease-in-out, font-size 0.2s ease',
      zIndex: 1,
      ':hover': {
        cursor: 'text'
      }
    }
  ],

  variants: {
    state: {
      error: {
        color: vars.colors['danger-400']
      },
      success: {
        color: vars.colors['success-400']
      },
      default: {
        color: vars.colors['secondary-300']
      }
    },
    float: {
      true: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        padding: '0px 4px',
        top: '0'
      },
      false: {
        fontWeight: 'normal',
        padding: '0',
        top: '50%'
      }
    }
  }
})

const boxStyle = style({
  position: 'relative'
})

const inputRecipe = recipe({
  base: [
    font,
    {
      border: 'none',
      borderRadius: 5,
      boxShadow: `0 0 0 1px ${vars.colors['secondary-300']}`,
      color: vars.colors.text.default,
      height: '4.8rem',
      maxWidth: '100%',
      minWidth: '100%',
      padding: '1rem',
      width: '100%',
      backgroundColor: vars.colors.white,
      selectors: {
        '&:focus': {
          outline: 'none'
        }
      }
    }
  ],

  variants: {
    state: {
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
        boxShadow: `0 0 0 1px ${vars.colors['secondary-300']}`,
        ':focus': {
          boxShadow: `inset 0 0 0 3px ${vars.colors['secondary-300']}`
        }
      }
    },
    hasIcon: {
      true: {
        paddingRight: '4.8rem'
      }
    }
  }
})

const iconStyle = style({
  backgroundColor: vars.colors.white,
  position: 'absolute',
  right: '0',
  top: '50%',
  transform: 'translate(-50%, -50%)'
})

const errorStyle = style({
  color: vars.colors['danger-400'],
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize,
  marginLeft: '0.4rem',
  marginTop: '0.4rem'
})

export const inputClasses = {
  boxStyle,
  containerStyle,
  contentStyle,
  errorStyle,
  iconStyle,
  inputRecipe,
  labelRecipe
}

export type InputRecipeVariants = NonNullable<RecipeVariants<typeof inputRecipe>>
export type LabelRecipeVariants = NonNullable<RecipeVariants<typeof labelRecipe>>
