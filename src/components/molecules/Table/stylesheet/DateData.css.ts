import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'
import { tableRowVars } from './TableRow.css'

export const dateData = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: calc.negate(tableRowVars.row.horizontalPadding),
  borderRadius: `${tableRowVars.roundness} 0 0 ${tableRowVars.roundness}`,
  backgroundColor: vars.colors['snow-600'],
  width: '75%',
  height: '100%',

  '@media': {
    [breakpoints.mobile]: {
      marginLeft: '-2.4rem',
      width: '70%'
    }
  }
})

export const dateDataTextPrimary = style({
  lineHeight: '1.2',
  fontSize: '2.4rem',

  '@media': {
    [breakpoints.mobile]: {
      lineHeight: '1.2',
      fontSize: '2rem'
    }
  }
})
