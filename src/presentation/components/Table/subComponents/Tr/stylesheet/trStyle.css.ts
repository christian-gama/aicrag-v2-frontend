import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { baseWrapperStyle, tableVars } from '../../../stylesheet'

export const trStyle = style([
  baseWrapperStyle,
  {
    marginTop: calc.divide(tableVars.row.height, 5),
    transition: 'transform 0.2s ease-in-out',

    ':last-of-type': {
      marginBottom: calc.divide(tableVars.row.height, 5)
    },

    ':hover': {
      transform: 'scale(1.02)'
    }
  }
])
